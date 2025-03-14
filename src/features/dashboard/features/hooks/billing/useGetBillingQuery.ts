import { useQuery } from "@tanstack/react-query";
import { TBillingResponseSchema } from "../../../schema/billing";
import { logInDevelopment } from "@/utils";
import axiosInstance from "@/lib/axios/axios-instance";
import { BillingResponseSchema } from "../../../schema/billing";

// Fetch billing data from the API
const getBilling = async (): Promise<TBillingResponseSchema> => {
  const response = await axiosInstance.get<unknown>("billing", {
    params: {
      include: "billing",
    },
  });

  const validatedResponse = BillingResponseSchema.safeParse(response.data);

  if (!validatedResponse.success) {
    logInDevelopment(validatedResponse.error.message);

    return {
      data: {
        collected: { amount: 0, properties: 0 },
        pending: { amount: 0, properties: 0 },
        overdue: { amount: 0, properties: 0 },
      },
      success: false,
      message: "Parse error. Invalid response format",
    };
  }

  return validatedResponse.data;
};

export const useGetBillingQuery = () => {
  return useQuery<TBillingResponseSchema>({
    queryFn: getBilling,
    queryKey: ["billing"],
    staleTime: 15,
  });
};
