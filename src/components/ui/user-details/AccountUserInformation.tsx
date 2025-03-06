"use client";

import {
  Divider,
  Grid2,
  Stack,
  TextField,
  Typography,
  Button,
  FormLabel,
  FormControl,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enqueueSnackbar } from "notistack";
import PermissionGuard from "@/features/auth/components/PermissionGuard";
import { UserPermission } from "@/constant";
import { getDirtyFields } from "@/utils";
import { useEffect } from "react";
import { EditUserAccountSchema, TEditUserAccountSchema, TUserProfileSchema } from "@/features/user/schema/user";
import { useEditingStore } from "@/features/user/feature/list/hooks/useUserStore";
import { useUpdateUsersMutation } from "@/features/user/feature/list/hooks/useUpdateUsersMutation";
import EditRoleAutocomplete from "@/features/user/feature/create/components/EditRoleAutocomplete";

type PViewUserDetailsProps = {
  user: TUserProfileSchema;
};

const AccountUserInformation = ({ user }: PViewUserDetailsProps) => {
  const isEditing = useEditingStore(state => state.isEditing);
  const toggleEditing = useEditingStore(state => state.toggleEditing);

  const { mutate: updateUser, isPending } = useUpdateUsersMutation();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, dirtyFields },
  } = useForm<TEditUserAccountSchema>({
    resolver: zodResolver(EditUserAccountSchema),
    defaultValues: {
      email: user?.email ?? "",
      roles: user?.roles?.map(role => role.name) || [],
    },
    mode: "all",
  });

  useEffect(() => {
    if (user) {
      reset({
        email: user?.email ?? "",
        roles: user?.roles?.map(role => role.name) || [],
      });
    }
  }, [user]);

  const onSubmit = (data: TEditUserAccountSchema) => {
    const dirtyData = getDirtyFields(data, dirtyFields);

    updateUser(
      { id: user?.id, userUpdateData: dirtyData },
      {
        onSuccess: (response: { message: string }) => {
          const message = response?.message || "TUser updated successfully";
          enqueueSnackbar(message, { variant: "success" });
          toggleEditing();
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
            Account Information
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
              <FormControl>
                <FormLabel sx={{ fontSize: 12 }} htmlFor="email">
                  Email
                </FormLabel>
                <TextField
                  id="email"
                  {...register("email")}
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  slotProps={{ input: { readOnly: !isEditing } }}
                />
              </FormControl>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack sx={{ gap: 2 }}>
              <FormControl>
                <FormLabel sx={{ fontSize: 12 }} htmlFor="roles">
                  Roles
                </FormLabel>
                {isEditing ? (
                  <EditRoleAutocomplete control={control} />
                ) : (
                  <TextField
                    id="roles"
                    slotProps={{ input: { readOnly: !isEditing } }}
                    fullWidth
                    value={
                      user?.roles?.length
                        ? user.roles.map(role => role.name || role).join(", ")
                        : "No roles assigned"
                    }
                  />
                )}
              </FormControl>
            </Stack>
          </Grid2>
        </Grid2>
        <Stack sx={{ p: 2 }}>
          {isEditing && (
            <PermissionGuard requiredPermissions={[UserPermission.Update]}>
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
            </PermissionGuard>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AccountUserInformation;