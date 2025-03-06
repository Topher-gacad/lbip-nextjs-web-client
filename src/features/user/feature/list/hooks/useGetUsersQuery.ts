
  import { TUsersPaginatedResponseSchema, usersPaginatedResponseSchema } from "@/features/user/schema/user";
import axiosInstance from "@/lib/axios/axios-instance";
  import { logInDevelopment } from "@/utils";
  import { useQuery } from "@tanstack/react-query";
  
  const getUser = async (): Promise<TUsersPaginatedResponseSchema> => {
    const response = await axiosInstance.get<unknown>("users", {
      params: { include: "profile,roles" },
    });
  
    const validatedResponse = usersPaginatedResponseSchema.safeParse(response.data);
  
    if (!validatedResponse.success) {
      logInDevelopment(`useGetUsersQuery: ${validatedResponse.error.message}`);
  
      return {
        message: "Parse error.",
        success: false,
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