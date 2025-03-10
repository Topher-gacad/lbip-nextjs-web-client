import { permissionsPaginatedResponseSchema, TRolesPaginatedResponseSchema } from "@/features/roles/schema/role";
import axiosInstance from "@/lib/axios/axios-instance";
import { logInDevelopment } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const fetchRoles = async (): Promise<TRolesPaginatedResponseSchema> => {
  const response = await axiosInstance.get<unknown>("permissions", {
    params: {
      sort: "name",
    },
  });

  const validatedResponse = permissionsPaginatedResponseSchema.safeParse(
    response.data
  );

  if (!validatedResponse.success) {
    logInDevelopment(validatedResponse.error.message);

    return {
      data: [],
      success: false,
      message: "Parse error. Invalid response format",
    };
  }

  return validatedResponse.data;
};

export const useGetPermissionsQuery = () => {
  return useQuery<TRolesPaginatedResponseSchema>({
    queryFn: fetchRoles,
    queryKey: ["permissions"],
    staleTime: 15 * 60 * 1000,
  });
};
