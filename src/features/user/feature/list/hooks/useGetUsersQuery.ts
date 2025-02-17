import {
  TUsersResponseSchema,
  UsersResponseSchema,
} from "@/features/user/schema/user";
import axiosInstance from "@/lib/axios/axios-instance";
import { logInDevelopment } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const getUser = async (): Promise<TUsersResponseSchema> => {
  const response = await axiosInstance.get<unknown>("users", {
    params: { include: "profile" },
  });

  const validatedResponse = UsersResponseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(`useGetUsersQuery: ${validatedResponse.error.message}`);

    return {
      message: "Parse error.",
      success: false,
      data: {
        data: [],
        links: {},
        meta: {},
      },
    };
  }
  return validatedResponse.data;
};

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });
};
