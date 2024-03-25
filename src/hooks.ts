import {useQuery}  from "@tanstack/react-query"
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

export const useGetPosts = () => {
  const {data: posts = [], isFetching} = useQuery({
    placeholderData: [],
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get<Data[]>(BASE_URL + "/posts");
      return response.data;
    }
  });
  return {posts, isFetching}
}
