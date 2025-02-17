"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { RoleSchema, TRoleSchema } from "../../../schema/role";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostRoleFormMutation } from "../hooks/usePostRoleFormMutation";
import { enqueueSnackbar } from "notistack";

const CreateRoleForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof RoleSchema>>({
    resolver: zodResolver(RoleSchema),
    defaultValues: { name: "" },
  });

  //   const onSubmit = () => {
  //     console.log("Role created");
  //   };

  const { mutate: postRole, isPending: isPosting } = usePostRoleFormMutation();

  const onSubmit = (data: TRoleSchema) => {
    console.log(data);
    postRole(data, {
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
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2 }}>
      <Box>
        <Typography>Create Role Form</Typography>
      </Box>
      <Box>
        <TextField
          label="Role name"
          size="medium"
          sx={{ textAlign: "center", mt: 1 }}
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          disabled={isSubmitting}
          fullWidth
        />
      </Box>
      <Button type="submit" disabled={isPosting}>
        Submit
      </Button>
    </Stack>
  );
};
export default CreateRoleForm;
