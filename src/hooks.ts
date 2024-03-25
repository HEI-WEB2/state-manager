import {useMutation, useQuery, useQueryClient}  from "@tanstack/react-query"
import axios from "axios";

type Data = Record<string, string>;

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const useGetUsers = () => {
  const {data: users = [], isFetching} = useQuery({
    placeholderData: [],
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get<Data[]>(BASE_URL + "/users");
      return response.data;
    }
  });
  return {users, isFetching}
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["users"],
    mutationFn: () => {
      return new Promise<void>((resolve) => {
        setTimeout(resolve, 1000 * 3);
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"]
      })
    }
  });
}
