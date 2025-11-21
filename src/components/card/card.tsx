import { Link } from "react-router-dom";
import { CreateUser } from "../form/form";
import { Button } from "../ui/button";
import useDeleteUser from "@/pages/home/service/mutation/useDeleteUser";

interface UserList {
  name?: string;
  email?: string;
  username?: string;
  id: number;
}

export const Card = ({ email, name, username, id }: UserList) => {
  const deleteMutation = useDeleteUser(id);

  const handleDelete = () => {
    deleteMutation.mutate(undefined, {
      onSuccess: () => {
        console.log("User deleted");
      },
      onError: (err) => {
        console.error("Delete error:", err);
      },
    });
  };

  return (
    <div className="border rounded-2xl p-5 my-5 border-blue-400">
      <h2 className="text-4xl hover:text-blue-400">
        <Link to={`/user/${id}`}>{name}</Link>
      </h2>

      <p>{email}</p>
      <p>{username}</p>

      <CreateUser email={email} name={name} username={username} id={id} />

      <Button className="ml-5" onClick={handleDelete}>
        {deleteMutation.isPending ? "Deleting..." : "Delete"}
      </Button>
    </div>
  );
};
