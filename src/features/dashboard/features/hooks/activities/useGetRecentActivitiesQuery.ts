import axiosInstance from "@/lib/axios/axios-instance";
import { logInDevelopment } from "@/utils";
import { useQuery } from "@tanstack/react-query";

import {} from "../../../schema/maintenance";
import {
  RecentActivitiesResponseSchema,
  TRecentActivitiesResponseSchema,
} from "@/features/dashboard/schema/activities";

const getActivities = async (): Promise<TRecentActivitiesResponseSchema> => {
  const response = await axiosInstance.get<unknown>("activities", {
    params: { include: "activities" },
  });

  const validatedResponse = RecentActivitiesResponseSchema.safeParse(
    response.data
  );

  if (!validatedResponse.success) {
    logInDevelopment(
      `useGetRecentActivitiesQuery: ${validatedResponse.error.message}`
    );

    return {
      message: "Parse error.",
      success: false,
      data: {
        time: null,
        title: null,
        image: null,
        subtitle: null,
      },
    };
  }
  return validatedResponse.data;
};

export const useGetRecentActivitiesQuery = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
    staleTime: 1000 * 60 * 5,
  });
};
