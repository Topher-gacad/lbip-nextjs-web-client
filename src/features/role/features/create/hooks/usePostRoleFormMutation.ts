"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios/axios-instance";
import { responseSchema, TBaseResponse } from "@/schemas/json-response";
import { logInDevelopment } from "@/utils";
import { TRoleSchema } from "@/features/role/schema/role";

const postRole = async (data: TRoleSchema): Promise<TBaseResponse> => {
  const response = await axiosInstance.post<unknown>("roles", data);

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

export const usePostRoleFormMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<TBaseResponse, Error, TRoleSchema>({
    mutationFn: postRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
};
