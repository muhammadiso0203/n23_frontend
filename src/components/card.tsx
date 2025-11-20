import { Link } from "react-router";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  type TaskList,
} from "../store/user-api/userApi";

export const Card = ({ description, id, title }: TaskList) => {
  const [mutate, { isLoading }] = useDeleteTaskMutation();
  const [updating, { isLoading: isUpdating }] = useUpdateTaskMutation();

  const deleteTask = () => {
    mutate(id)
      .unwrap()
      .then((res) => {
        console.log(res);
      });
  };

  const updateTask = () => {
    updating({ id, title: "New Title", completed: true })
      .unwrap()
      .then((res) => console.log("Updated:", res))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300">
      <Link to={`/user/${id}`}>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition-colors duration-300">
          {title}
        </h1>
        <p className="text-gray-600 mb-4">{description}</p>
      </Link>
      <button
        onClick={deleteTask}
        className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Deleting..." : "Delete"}
      </button>
      <button
        onClick={updateTask}
        className={`px-4 py-2 ml-2 rounded-md text-white font-semibold transition-colors duration-300 ${
          isUpdating
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={isUpdating}
      >
        {isUpdating ? "Updating..." : "Update"}
      </button>
    </div>
  );
};
