import { useMutation } from "@tanstack/react-query";

import { logInDevelopment } from "@/utils";
import { TEditUserPasswordSchema } from "@/features/user/schema/user";
import { responseSchema, TBaseResponse } from "@/schemas/json-response";
import axiosInstance from "@/lib/axios/axios-instance";

type UpdateUserArg = {
  userUpdateData: Partial<TEditUserPasswordSchema>;
  id: string;
};

const updatePassword = async ({
  userUpdateData,
  id,
}: UpdateUserArg): Promise<TBaseResponse> => {
  const response = await axiosInstance.patch<unknown>(
    `users/${id}/password`,
    userUpdateData
  );

  const validatedResponse = responseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(validatedResponse.error.message);

    return { message: "Parse error. Invalid response format", success: false };
  }

  return validatedResponse.data;
};

export const useUpdatePasswordMutation = () => {
  return useMutation<TBaseResponse, Error, UpdateUserArg>({
    mutationFn: updatePassword,
  });
};
