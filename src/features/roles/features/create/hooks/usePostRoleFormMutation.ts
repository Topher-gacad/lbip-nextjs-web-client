"use client";

import { TRole } from "@/features/roles/schema/role";
import axiosInstance from "@/lib/axios/axios-instance";
import { responseSchema, TBaseResponse } from "@/schemas/json-response";
import { logInDevelopment } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const postRole = async (data: TRole): Promise<TBaseResponse> => {
  console.log("🔍 Sending Data:", data); // Debugging
  const response = await axiosInstance.post("roles", data);
  console.log("✅ API Response:", response.data); // Debugging API response

  const validatedResponse = responseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(validatedResponse.error.message);

    return {
      message: "Parse Error. Invalid response format",
      success: false,
    };
  }

  return validatedResponse.data;
};

export const usePostRoleFormMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<TBaseResponse, Error, TRole>({
    mutationFn: postRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
};
