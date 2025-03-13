"use client";

import { Control } from "react-hook-form";

import CustomAutoComplete from "@/components/ui/CustomAutocomplete";
import { TEditUserAccountSchema } from "@/features/user/schema/user";
import { useGetRoleQuery } from "@/features/roles/features/list/hooks/useGetRoleQuery";

const EditRoleAutocomplete = ({
  control,
}: {
  control: Control<TEditUserAccountSchema>;
}) => {
  const {
    data: { data: roles } = { data: [] },
    isLoading,
    isError,
  } = useGetRoleQuery({ searchKey: "" });

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

export default EditRoleAutocomplete;
