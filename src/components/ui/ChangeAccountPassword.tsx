"use client";

import {
  Divider,
  Grid2,
  Stack,
  Typography,
  Button,
  List,
  ListItem,
  FormLabel,
  FormControl,
  Paper,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enqueueSnackbar } from "notistack";
import { getDirtyFields } from "@/utils";
import { useEffect, useState } from "react";
import { useAuthenticatedUser } from "@/features/auth/api/useAuthenticatedUser";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { EditUserPasswordSchema, TEditUserPasswordSchema, TUserProfileSchema } from "@/features/user/schema/user";
import { useUpdatePasswordMutation } from "@/features/user/feature/list/hooks/useUpdatePasswordMutations";

type ViewUserDetailsProps = {
  user: TUserProfileSchema;
};

const ChangeAccountPassword = ({ user }: ViewUserDetailsProps) => {
  const { mutate: updatePassword, isPending } = useUpdatePasswordMutation();
  const [showPassword, setShowPassword] = useState({
    new: false,
    confirm: false,
    current: false,
  });

  const handleClickShowPassword = (field: "new" | "confirm" | "current") => {
    setShowPassword(prevState => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, dirtyFields },
  } = useForm<TEditUserPasswordSchema>({
    resolver: zodResolver(EditUserPasswordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
      current_password: "",
    },
    mode: "all",
  });

  useEffect(() => {
    if (user) {
      reset({
        password: "",
        password_confirmation: "",
        current_password: "",
      });
    }
  }, [user]);

  const authUser = useAuthenticatedUser();
  const onSubmit = (data: TEditUserPasswordSchema) => {
    const dirtyData = getDirtyFields(data, dirtyFields);
    updatePassword(
      { id: user?.id, userUpdateData: dirtyData },

      {
        onSuccess: (response: { message: string }) => {
          const message = response?.message || "TUser updated successfully";
          enqueueSnackbar(message, { variant: "success" });

          if (user.id === authUser?.data?.data?.id)
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          reset();
        },

        onError: (error: { message: string }) => {
          const message = error?.message || "Failed to update user";
          enqueueSnackbar(message, {
            variant: "error",
            autoHideDuration: null,
          });
        },
      }
    );
  };

  return (
    <Paper
      sx={{
        border: theme => `1px solid ${theme.palette.divider}`,
        px: 1.5,
        py: 0.5,
      }}
      elevation={0}
    >
      <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack
          sx={{
            p: 3,
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            gap: { xs: 2, md: 1 },
          }}
          justifyContent="space-between"
        >
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            Change Password
          </Typography>
        </Stack>
        <Divider />
        <Grid2
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ p: 3, gap: 3 }}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack sx={{ gap: 2 }}>
              <FormControl variant="outlined">
                <FormLabel sx={{ fontSize: 12 }} htmlFor="current_password">
                  Current Password
                </FormLabel>
                <OutlinedInput
                  {...register("current_password")}
                  id="current_password"
                  fullWidth
                  error={!!errors.current_password}
                  type={showPassword.current ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleClickShowPassword("current")}
                        edge="end"
                      >
                        {showPassword.current ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="outlined">
                <FormLabel sx={{ fontSize: 12 }} htmlFor="password">
                  New Password
                </FormLabel>
                <OutlinedInput
                  {...register("password")}
                  id="password"
                  fullWidth
                  error={!!errors.password}
                  type={showPassword.new ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleClickShowPassword("new")}
                        edge="end"
                      >
                        {showPassword.new ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="outlined">
                <FormLabel
                  sx={{ fontSize: 12 }}
                  htmlFor="password_confirmation"
                >
                  Confirm New Password
                </FormLabel>
                <OutlinedInput
                  id="password_confirmation"
                  {...register("password_confirmation")}
                  fullWidth
                  error={!!errors.password_confirmation}
                  type={showPassword.confirm ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleClickShowPassword("confirm")}
                        edge="end"
                      >
                        {showPassword.confirm ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ pl: 4 }}>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <List sx={{ flex: 1, pt: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  New password must contain:
                </Typography>
                <List>
                  <ListItem
                    sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                  >
                    • At least 8 characters
                  </ListItem>
                  <ListItem
                    sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                  >
                    • At least 1 lower letter (a-z)
                  </ListItem>
                  <ListItem
                    sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                  >
                    • At least 1 uppercase letter (A-Z)
                  </ListItem>
                  <ListItem
                    sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                  >
                    • At least 1 number (0-9)
                  </ListItem>
                  <ListItem
                    sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                  >
                    • At least 1 special character
                  </ListItem>
                </List>
              </List>
            </Stack>
          </Grid2>
        </Grid2>
        <Stack sx={{ p: 2 }}>
          <Button
            sx={{ alignSelf: "end" }}
            size="small"
            variant="outlined"
            type="submit"
            color="primary"
            disabled={!isDirty || isPending}
          >
            Save Changes
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ChangeAccountPassword;