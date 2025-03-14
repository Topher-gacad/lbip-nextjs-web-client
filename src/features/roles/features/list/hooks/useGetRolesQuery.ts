import {
  rolesPaginatedResponseSchema,
  TRolesPaginatedResponseSchema,
} from "@/features/roles/schema/role";
import axiosInstance from "@/lib/axios/axios-instance";
import { logInDevelopment } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const fetchRoles = async (): Promise<TRolesPaginatedResponseSchema> => {
  const response = await axiosInstance.get<unknown>("roles", {
    params: {
      sort: "name",
    },
  });

  const validatedResponse = rolesPaginatedResponseSchema.safeParse(
    response.data
  );

  if (!validatedResponse.success) {
    logInDevelopment(validatedResponse.error.message);

    return {
      data: {
        data: [],
        links: {
          first: "",
          last: "",
          prev: null,
          next: null
        },
        meta: {
          path: "",
          links: [],
          current_page: 0,
          from: null,
          last_page: 0,
          per_page: 0,
          to: null,
          total: 0
        },
      },
      success: false,
      message: "Parse error. Invalid response format",
    };
  }

  return validatedResponse.data;
};

export const useGetRolesQuery = () => {
  return useQuery<TRolesPaginatedResponseSchema>({
    queryFn: fetchRoles,
    queryKey: ["roles"],
    staleTime: 15,
  });
};
