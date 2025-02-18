import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logInDevelopment } from "@/utils";
import { responseSchema, TBaseResponse } from "@/schemas/json-response";
import axiosInstance from "@/lib/axios/axios-instance";
import { TRoleSchema } from "@/features/roles/schema/role";

type UpdateRolesArg = {
  rolesUpdateData: TRoleSchema;
  id: string;
};

const updateRoles = async ({
  rolesUpdateData,
  id,
}: UpdateRolesArg): Promise<TBaseResponse> => {
  const response = await axiosInstance.put<unknown>(
    `roles/${id}`,
    rolesUpdateData
  );

  const validatedResponse = responseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(validatedResponse.error.message);

    return {
      message: "Parse error. Invalid response format",
      success: false,
    };
  }

  return validatedResponse.data;
};

export const useUpdateRolesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<TBaseResponse, Error, UpdateRolesArg>({
    mutationFn: updateRoles,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"], exact: false });
      queryClient.refetchQueries({ queryKey: ["roles"], exact: false });
    },
  });
};
