
import { SingleUsersResponseSchema, TSingleUserResponseSchema } from "@/features/user/schema/user";
import axiosInstance from "@/lib/axios/axios-instance";
import { logInDevelopment } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const emptyResponse:TSingleUserResponseSchema= {
  data:   {
    email: "",
    profile: {
      first_name: "",
      middle_name: null,
      last_name: "",
      gender: "",
      contact_num: "", // Ensure this field exists if expected
    },
    id: "",
    password_confirmation: undefined,
    password: undefined,
    created_at: undefined,
    roles: []
  },
  success: false,
  message: "Parse error. Invalid response format",
};

const fetchUserData = async (userId: string): Promise<TSingleUserResponseSchema> => {
  const response = await axiosInstance.get<unknown>(`users/${userId}`, {
    params: {
      include: "profile,roles"
    },
  });

  const validatedResponse = SingleUsersResponseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(`user api : ${validatedResponse.error.message}`);
    return emptyResponse; 
  }

  return validatedResponse.data;
};

export const useGetSingleUserQuery = (userId: string, enabled: boolean = true) => {
  return useQuery<TSingleUserResponseSchema>({
    queryFn: () => fetchUserData(userId),
    queryKey: ["users", userId],
    staleTime: 15000,
    enabled: enabled,
  });
};