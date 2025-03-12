import { UserPermission } from "@/constant";
import PermissionGuard from "@/features/auth/components/PermissionGuard";
import { useUpdateProfileMutation } from "@/features/user/feature/list/hooks/useUpdateProfileMutation";
import { useEditingStore } from "@/features/user/feature/list/hooks/useUserStore";
import {
  EditProfileSchema,
  TEditProfileSchema,
  TUserProfileSchema,
} from "@/features/user/schema/user";
import { getDirtyFields } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Divider,
  FormLabel,
  Grid2,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";

type PPersonalUserInformation = {
  user: TUserProfileSchema;
};

const PersonalUserInformation = ({ user }: PPersonalUserInformation) => {
  const isEditing = useEditingStore(state => state.isEditing);
  const toggleEditing = useEditingStore(state => state.toggleEditing);

  const { mutate: updateProfile, isPending } = useUpdateProfileMutation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields },
  } = useForm<TEditProfileSchema>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      first_name: user?.profile?.first_name,
      middle_name: user?.profile?.middle_name,
      last_name: user?.profile?.last_name,
      gender: user?.profile?.gender,
      contact_number: user?.profile?.contact_number,
    },
  });

  console.log(dirtyFields);
  const onSubmit = (data: TEditProfileSchema) => {
    const dirtyData = getDirtyFields(data, dirtyFields);

    if (user.id) {
      updateProfile(
        { id: user.id, userUpdateData: dirtyData },
        {
          onSuccess: (response: { message: string }) => {
            const message = response?.message || "User updated successfully";
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
    }
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
      <Stack component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 3 }}>
        <Stack
          sx={{
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
              mb: 3,
            }}
          >
            Personal Information
          </Typography>
          <Divider />
        </Stack>

        <Grid2
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ mt: 2 }}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormLabel sx={{ fontSize: 12 }} htmlFor="first_name">
              First Name
            </FormLabel>
            <TextField
              id="first_name"
              {...register("first_name")}
              fullWidth
              error={!!errors.first_name}
              helperText={errors.first_name?.message}
              slotProps={{ input: { readOnly: !isEditing } }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormLabel sx={{ fontSize: 12 }} htmlFor="middle_name">
              Middle Name
            </FormLabel>
            <TextField
              id="middle_name"
              {...register("middle_name")}
              fullWidth
              error={!!errors.middle_name}
              helperText={errors.middle_name?.message}
              slotProps={{ input: { readOnly: !isEditing } }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormLabel sx={{ fontSize: 12 }} htmlFor="last_name">
              Last Name
            </FormLabel>
            <TextField
              id="last_name"
              {...register("last_name")}
              fullWidth
              error={!!errors.last_name}
              helperText={errors.last_name?.message}
              slotProps={{ input: { readOnly: !isEditing } }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormLabel sx={{ fontSize: 12 }} htmlFor="gender">
              Gender
            </FormLabel>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <TextField
                  id="gender"
                  {...field}
                  select
                  slotProps={{ input: { readOnly: !isEditing } }}
                  fullWidth
                  error={!!errors.gender}
                  helperText={errors.gender?.message}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </TextField>
              )}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormLabel sx={{ fontSize: 12 }} htmlFor="contact_number">
              Contact Number
            </FormLabel>
            <TextField
              id="contact_number"
              {...register("contact_number")}
              slotProps={{ input: { readOnly: !isEditing } }}
              fullWidth
              error={!!errors.contact_number}
              helperText={errors.contact_number?.message}
            />
          </Grid2>
        </Grid2>

        <Stack sx={{ mt: 3 }}>
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
export default PersonalUserInformation;
