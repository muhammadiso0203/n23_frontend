import { request } from "@/config/request";
import { useMutation } from "@tanstack/react-query";

// interface User {
//   name: string;
//   username: string;
//   email: string;
// }

const useDeleteUser = (id: number) => {
  return useMutation({
    mutationFn: () =>
      request.delete(`/user/${id}`).then((res) => res.data),
  });
};

export default useDeleteUser;
