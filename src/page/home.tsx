import { Card } from "../components/card";
import { Form } from "../components/form";
import { useGetTasksListQuery } from "../store/user-api/userApi";

const Home = () => {
  const { data, isLoading } = useGetTasksListQuery("/user");
  return (
    <>
      <Form />
      <div className="container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {data?.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
