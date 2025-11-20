import { useParams } from "react-router";
import { useGetTaskDetailQuery } from "../store/user-api/userApi";

const UserDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetTaskDetailQuery(id as string);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {isLoading ? (
        <h2 className="text-gray-500 text-xl text-center animate-pulse">
          Loading...
        </h2>
      ) : data ? (
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 text-center">
            {data.title}
          </h1>
          <p className="text-gray-700 text-lg md:text-xl text-center">
            {data.description}
          </p>
        </div>
      ) : (
        <h2 className="text-gray-500 text-center text-lg">No data found</h2>
      )}
    </div>
  );
};

export default UserDetail;
