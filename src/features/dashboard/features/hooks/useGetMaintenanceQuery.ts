import axiosInstance from "@/lib/axios/axios-instance";
import { logInDevelopment } from "@/utils";
import { useQuery } from "@tanstack/react-query";

import {
  MaintenanceResponseSchema,
  TMaintenanceResponseSchema,
} from "../../schema/maintenance";

const getMaintenance = async (): Promise<TMaintenanceResponseSchema> => {
  const response = await axiosInstance.get<unknown>("maintenance", {
    params: { include: "maintenance" },
  });

  const validatedResponse = MaintenanceResponseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(
      `useGetMaintenanceQuery: ${validatedResponse.error.message}`
    );

    return {
      message: "Parse error.",
      success: false,
      data: {
        property: null,
        space: null,
        priority: null,
        status: null,
      },
    };
  }
  return validatedResponse.data;
};

export const useGetMaintenanceQuery = () => {
  return useQuery({
    queryKey: ["maintenance"],
    queryFn: getMaintenance,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};
