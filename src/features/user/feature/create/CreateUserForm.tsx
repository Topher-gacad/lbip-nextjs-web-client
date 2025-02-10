"use client";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import { CreateUserProfileSchema } from "../../schema/user";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CreateUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof CreateUserProfileSchema>>({
    resolver: zodResolver(CreateUserProfileSchema),
    defaultValues: {
      email: "",
      password: "",
      first_name: "",
      middle_name: null,
      last_name: "",
      contact_num: "",
    },
  });

  const onSubmit = (data: z.infer<typeof CreateUserProfileSchema>) => {
    console.log(data);
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
      />

      <FormControl>
        <InputLabel id="Gender">Gender</InputLabel>
        <Select
          labelId="Gender"
          {...register("gender")}
          error={!!errors.gender}
          //  helperText={errors.gender?.message}
          disabled={isSubmitting}
          fullWidth
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <TextField
        type="email"
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        disabled={isSubmitting}
        fullWidth
      />

      <TextField
        label="Contact Number"
        {...register("contact_num")}
        error={!!errors.contact_num}
        helperText={errors.contact_num?.message}
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

      <Button type="submit">Submit</Button>
    </Stack>
  );
};

export default CreateUserForm;
