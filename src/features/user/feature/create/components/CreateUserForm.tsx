"use client";

import {
  Autocomplete,
  Button,
  FormLabel,
  Grid2,
  Stack,
  TextField,
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
    formState: { errors, isSubmitting },
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
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} sx={{ gap: 1 }}>
      <TextField
        label="First name"
        {...register("first_name")}
        error={!!errors.first_name}
        helperText={errors.first_name?.message}
        disabled={isSubmitting}
        fullWidth
      />
      <TextField
        label="Middle name"
        {...register("middle_name")}
        error={!!errors.middle_name}
        helperText={errors.middle_name?.message}
        disabled={isSubmitting}
        fullWidth
      />

      <TextField
        label="Last Name"
        {...register("last_name")}
        error={!!errors.last_name}
        helperText={errors.last_name?.message}
        disabled={isSubmitting}
        fullWidth
        size="medium"
      />

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
                      height: "34px",
                    },
                  }}
                />
              )}
            />
          )}
        />
      </Grid2>
      <TextField
        type="email"
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        disabled={isSubmitting}
        fullWidth
      />

      <Grid2 size={{ xs: 12, md: 6 }}>
        <FormLabel sx={{ fontSize: 12 }} htmlFor="roles">
          Roles*
        </FormLabel>
        <RoleAutoComplete control={control} />
      </Grid2>

      <TextField
        label="Contact Number"
        {...register("contact_number")}
        error={!!errors.contact_number}
        helperText={errors.contact_number?.message}
        disabled={isSubmitting}
        fullWidth
      />
      <TextField
        type="password"
        label="Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        disabled={isSubmitting}
        fullWidth
      />

      <TextField
        type="password"
        label="Confirm Password"
        {...register("password_confirmation")}
        error={!!errors.password_confirmation}
        helperText={errors.password_confirmation?.message}
        disabled={isSubmitting}
        fullWidth
      />

      <Button type="submit" disabled={isPosting}>
        Submit
      </Button>
    </Stack>
  );
};

export default CreateUserForm;
