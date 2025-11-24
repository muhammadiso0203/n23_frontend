import { request } from "@/config/request";
import { useQuery } from "@tanstack/react-query";

interface UserList {
  name: string;
  email: string;
  username?: string;
  id: number;
}

export const UseSearch = (str: string = "") => {
  return useQuery({
    queryKey: ["search_item"],
    queryFn: () =>
      request
        .get<UserList[]>("/user", {
          params: {
            name_like: str,
          },
        })
        .then((res) => res.data),
  });
};
