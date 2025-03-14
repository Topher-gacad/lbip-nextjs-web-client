import axiosInstance from "@/lib/axios/axios-instance";
import { logInDevelopment } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import {
  PropertyResponseSchema,
  TPropertyResponseSchema,
} from "../../../schema/property";

const getProperty = async (): Promise<TPropertyResponseSchema> => {
  const response = await axiosInstance.get<unknown>("property", {
    params: { include: "property" },
  });

  const validatedResponse = PropertyResponseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(`useGetPropertyQuery: ${validatedResponse.error.message}`);

    return {
      message: "Parse error.",
      success: false,
      data: {
        property: null,
        space: null,
        ticket: null,
        image: null,
        type: null,
      },
    };
  }
  return validatedResponse.data;
};

export const useGetPropertyQuery = () => {
  return useQuery({
    queryKey: ["property"],
    queryFn: getProperty,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};
