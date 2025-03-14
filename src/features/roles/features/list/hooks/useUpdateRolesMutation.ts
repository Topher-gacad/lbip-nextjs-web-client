import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logInDevelopment } from "@/utils";
import axiosInstance from "@/lib/axios/axios-instance";
import { TEditRoleSchema } from "@/features/roles/schema/role";
import { responseSchema, TBaseResponse } from "@/schemas/json-response";

const updateRole = async ({
  roleUpdateData,
  id,
}: {
  id: string;
  roleUpdateData: TEditRoleSchema;
}): Promise<TBaseResponse> => {
  const response = await axiosInstance.put<unknown>(
    `roles/${id}`,
    roleUpdateData
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

export const useUpdateRoleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    TBaseResponse,
    Error,
    { roleUpdateData: TEditRoleSchema; id: string }
  >({
    mutationFn: updateRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
};