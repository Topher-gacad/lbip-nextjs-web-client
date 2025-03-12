"use client";

import { Control } from "react-hook-form";

import CustomAutoComplete from "@/components/ui/CustomAutocomplete";
import { TCreateUserProfileSchema } from "@/features/user/schema/user";
import { useGetRolesQuery } from "@/features/roles/features/list/hooks/useGetRolesQuery";

const RoleAutocomplete = ({
  control,
}: {
  control: Control<TCreateUserProfileSchema>;
}) => {
  const {
    data: { data: {data: roles} } = { data: {data: []} },
    isLoading,
    isError,
  } = useGetRolesQuery();


  return (
    <CustomAutoComplete
      multiple={true}
      control={control}
      name="roles"
      valueIdentifier="name"
      labelIdentifier="name"
      options={roles}
      noOptionsText={
        isLoading
          ? "Loading..."
          : isError
            ? "Failed to load roles"
            : "No options"
      }
    />
  );
};

export default RoleAutocomplete;