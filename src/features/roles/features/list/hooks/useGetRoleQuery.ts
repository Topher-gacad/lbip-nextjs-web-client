import { roleResponseSchema, TRoleResponseSchema } from "@/features/roles/schema/role";
import axiosInstance from "@/lib/axios/axios-instance";
import { logInDevelopment } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const emptyRoleResponse = {
  id: "",
  name: "",
};

const fetchRoleData = async (roleId: string): Promise<TRoleResponseSchema> => {
  const response = await axiosInstance.get<unknown>(`roles/${roleId}`, {
    params: {
      include: "permissions",
    },
  });

  const validatedResponse = roleResponseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(validatedResponse.error.message);

    return {
      data: emptyRoleResponse,
      success: false,
      message: "Parse error. Invalid response format",
    };
  }

  return validatedResponse.data;
};

export const useGetRoleQuery = (roleId: string) => {
  return useQuery<TRoleResponseSchema>({
    queryFn: () => fetchRoleData(roleId),
    queryKey: ["roles", roleId],
    staleTime: 15,
  });
};
