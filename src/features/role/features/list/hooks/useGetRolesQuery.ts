import {
  RoleResponseSchema,
  TRoleResponseSchema,
} from "@/features/role/schema/role";
import axiosInstance from "@/lib/axios/axios-instance";
import { logInDevelopment } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const getRole = async (): Promise<TRoleResponseSchema> => {
  const response = await axiosInstance.get<unknown>("roles");

  const validatedResponse = RoleResponseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(`useGetRolesQuery: ${validatedResponse.error.message}`);

    return {
      success: false,
      message: "Parse error. Invalid response format",
      data: [],
    };
  }

  return validatedResponse.data;
};

export const useGetRolesQuery = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: getRole,
  });
};
