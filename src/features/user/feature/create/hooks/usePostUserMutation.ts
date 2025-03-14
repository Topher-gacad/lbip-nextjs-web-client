import { TCreateUserProfileSchema } from "@/features/user/schema/user";
import axiosInstance from "@/lib/axios/axios-instance";
import { responseSchema, TBaseResponse } from "@/schemas/json-response";
import { logInDevelopment } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const postUser = async (
  data: TCreateUserProfileSchema
): Promise<TBaseResponse> => {
  const response = await axiosInstance.post<unknown>("users", data);

  const validatedResponse = responseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(validatedResponse.error.message);

    return { message: "Parse error.", success: false };
  }

  return validatedResponse.data;
};

export const usePostUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<TBaseResponse, AxiosError, TCreateUserProfileSchema>({
    mutationFn: postUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
};
