import { useForm } from "react-hook-form";
import { useCreateTaskMutation } from "../store/user-api/userApi";

interface Inputs {
  title: string;
  description: string;
}

export const Form = () => {
  const { handleSubmit, register, reset } = useForm<Inputs>();
  const [mutate, { isLoading }] = useCreateTaskMutation();

  const submit = (data: Inputs) => {
    mutate(data)
      .unwrap()
      .then((res) => {
        console.log(res);
      });
    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            {...register("title")}
            type="text"
            placeholder="Enter task title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <input
            {...register("description")}
            type="text"
            placeholder="Enter task description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded-md text-white font-semibold transition-colors duration-300 ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Task"}
        </button>
      </form>
    </div>
  );
};
