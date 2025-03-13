"use client";

import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormLabel,
  Grid2,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  CreateUserProfileSchema,
  TCreateUserProfileSchema,
} from "../../../schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { usePostUserMutation } from "../hooks/usePostUserMutation";
import RoleAutoComplete from "./RoleAutoComplete";

const CreateUserForm = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<TCreateUserProfileSchema>({
    resolver: zodResolver(CreateUserProfileSchema),
    defaultValues: {
      gender: null,
      email: "",
      password: "",
      first_name: "",
      middle_name: null,
      last_name: "",
      contact_number: "",
    },
  });

  console.log(errors);
  const { mutate: postUser, isPending: isPosting } = usePostUserMutation();

  const onSubmit = (data: TCreateUserProfileSchema) => {
    console.log(data);
    postUser(data, {
      onSuccess: response => {
        const message = response?.message || "User created successfully";
        enqueueSnackbar(message, { variant: "success" });
        reset();
      },
      onError: error => {
        const message = error?.message || "Failed to create user";
        enqueueSnackbar(message, { variant: "error", autoHideDuration: null });
      },
    });
  };

  return (
    <Stack sx={{ gap: 2 }}>
      <Box>
        <Typography variant="h3">Create New User</Typography>
        <Typography variant="body1">
          Please provide the required information in the spaces provided below
        </Typography>
      </Box>

      <Paper
        sx={{
          p: 3,
          border: theme => `1px solid ${theme.palette.divider}`,
          borderRadius: "15px",
        }}
        elevation={0}
      >
        <Stack>
          <Typography variant="h5">Personal Information</Typography>
        </Stack>

        <Divider />
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ gap: 1, mt: 2 }}
        >
          <Grid2 container spacing={2} sx={{ mb: 5 }}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <FormLabel sx={{ fontSize: 12 }} htmlFor="first_name">
                First Name *
              </FormLabel>
              <TextField
                id="first_name"
                {...register("first_name")}
                error={!!errors.first_name}
                helperText={errors.first_name?.message}
                disabled={isSubmitting}
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <FormLabel sx={{ fontSize: 12 }} htmlFor="middle_name">
                Middle Name*
              </FormLabel>
              <TextField
                id="middle_name"
                {...register("middle_name")}
                name="middle_name"
                error={!!errors.middle_name}
                helperText={errors.middle_name?.message}
                disabled={isSubmitting}
                fullWidth
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <FormLabel sx={{ fontSize: 12 }} htmlFor="last_name">
                Last Name*
              </FormLabel>
              <TextField
                id="last_name"
                {...register("last_name")}
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
                disabled={isSubmitting}
                fullWidth
                size="medium"
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <FormLabel sx={{ fontSize: 12 }} htmlFor="gender">
                Gender*
              </FormLabel>
              <Controller
                control={control}
                name="gender"
                render={({ field, fieldState: { error } }) => (
                  <Autocomplete
                    id="gender"
                    {...field}
                    options={["male", "female"]}
                    value={field.value || ""}
                    onChange={(event, newValue) => field.onChange(newValue)}
                    disablePortal
                    renderInput={params => (
                      <TextField
                        {...params}
                        error={!!error}
                        helperText={error?.message}
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: "41px",
                          },
                        }}
                      />
                    )}
                  />
                )}
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <FormLabel sx={{ fontSize: 12 }} htmlFor="contact_number">
                Contact Number *
              </FormLabel>

              <TextField
                id="contact_number"
                {...register("contact_number")}
                error={!!errors.contact_number}
                helperText={errors.contact_number?.message}
                disabled={isSubmitting}
                fullWidth
              />
            </Grid2>
          </Grid2>

          <Box>
            <Typography variant="h5">Account Information</Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <FormLabel sx={{ fontSize: 12 }} htmlFor="email">
                  Email *
                </FormLabel>
                <TextField
                  id="email"
                  type="email"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  disabled={isSubmitting}
                  fullWidth
                />
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <FormLabel sx={{ fontSize: 12 }} htmlFor="roles">
                  Roles*
                </FormLabel>
                <RoleAutoComplete control={control} />
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <FormLabel sx={{ fontSize: 12 }} htmlFor="email">
                  Password *
                </FormLabel>

                <TextField
                  type="password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  disabled={isSubmitting}
                  fullWidth
                />
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <FormLabel sx={{ fontSize: 12 }} htmlFor="roles">
                  Confirm Password *
                </FormLabel>

                <TextField
                  type="password"
                  {...register("password_confirmation")}
                  error={!!errors.password_confirmation}
                  helperText={errors.password_confirmation?.message}
                  disabled={isSubmitting}
                  fullWidth
                />
              </Grid2>
            </Grid2>
          </Box>

          <Stack
            sx={{
              mt: 5,
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                if (isDirty) {
                  reset();
                }
              }}
              disabled={!isDirty}
            >
              Clear form
            </Button>

            <Button
              variant="contained"
              type="submit"
              disabled={!isDirty || isSubmitting || isPosting}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
};

export default CreateUserForm;
