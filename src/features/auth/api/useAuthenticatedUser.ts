"use client";

import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/lib/axios/axios-instance";
import { logInDevelopment } from "@/utils";
import { AuthResponse, authResponseSchema } from "@/features/auth/schema/auth";

export const emptyAuth = {
  id: "",
  email: "",
  roles: [],
  permissions: [],
  profile: {
    id: "",
    employee_id: "",
    first_name: "",
    middle_name: null,
    last_name: "",
    hourly_rate: 0,
    contact_num: "",
    user_id: "",
    department_id: "",
    job_title_id: "",
    department: {
      id: "",
      deleted_at: null,
      updated_at: "",
      created_at: "",
      department_name: "",
      department_head_id: "",
      created_by: "",
    },
  },
};

const getAuthenticatedUser = async (): Promise<AuthResponse> => {
  const response = await axiosInstance.get<unknown>("auth/spa/authenticate");

  const validatedResponse = authResponseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(validatedResponse.error.message);

    return {
      success: false,
      message: "Parse error. Invalid response format",
      data: emptyAuth,
    };
  }

  return validatedResponse.data;
};

export const authQueryKey = "auth";

export const useAuthenticatedUser = () =>
  useQuery<AuthResponse>({
    queryKey: [authQueryKey],
    queryFn: getAuthenticatedUser,
    staleTime: 1000 * 60 * 15,
    refetchOnWindowFocus: false,
  });
