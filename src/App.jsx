import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./store/reducer/user-reducer";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";

function App() {
  const { count, userList } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { handleSubmit, reset, register } = useForm();

  const handler = (data) => {
    dispatch(addUser({ ...data, id: nanoid() }));
    reset();
  };

  const deleteItem = (userName) => {
    dispatch(deleteUser({ userName }));
  };

  const updateItem = (userName) => {
    const newName = prompt();
    if (newName) {
      dispatch(updateUser({ userName, newName }));
    }
  };

  return (
    <>
      <h1>{count}</h1>

      <form onSubmit={handleSubmit(handler)}>
        <input type="text" {...register("userName")} />
        <button type="submit">send</button>
      </form>

      {userList.map((item) => (
        <div key={item.id}>
          <h1>{item.userName}</h1>

          <button onClick={() => deleteItem(item.userName)}>Delete</button>
          <button onClick={() => updateItem(item.userName)}>Update</button>
        </div>
      ))}
    </>
  );
}

export default App;
