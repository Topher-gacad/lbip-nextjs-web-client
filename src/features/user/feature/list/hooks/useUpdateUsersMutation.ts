import { TEditUserAccountSchema } from "@/features/user/schema/user"
import axiosInstance from "@/lib/axios/axios-instance";
import { responseSchema, TBaseResponse } from "@/schemas/json-response";
import { logInDevelopment } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UpdateUserArg = {
    userUpdateData: Partial<TEditUserAccountSchema>;
    id: string;
}

const updateUsers = async ({
    userUpdateData,
    id,
}: UpdateUserArg ): Promise<TBaseResponse> => {
    const response = await axiosInstance.put<unknown>(
        `users/${id}` ,
        userUpdateData
    );

    const validatedResponse = responseSchema.safeParse(response.data);

    if(!validatedResponse.success) {
        logInDevelopment(validatedResponse.error.message);

        return {message: "Parse error, Invalid response format", success: false};
    }

    return validatedResponse.data;
};

export const useUpdateUsersMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<TBaseResponse, Error, UpdateUserArg>({
        mutationFn: updateUsers,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: ["users", variables.id],
                exact: false
            })
        }
    })
}