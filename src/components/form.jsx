import React from "react";
import { useForm } from "react-hook-form";
import { AppContextWrapper } from "../context/AppContext";
import { nanoid } from "nanoid";

export const Form = () => {
  const { handleSubmit, reset, register } = useForm();
  const { dispatch } = React.useContext(AppContextWrapper);

  const submit = (data) => {
    dispatch({ type: "CREATE_USER", value: { ...data, id: nanoid() } });
    reset();
  };
  return (
    <form className="flex mt-3 rounded-2xl" onSubmit={handleSubmit(submit)}>
      <input className="bg-amber-300 rounded-tl-[10px] rounded-bl-[10px] outline-none p-3" {...register("username")} type="text" />
      <button className="p-3.5 bg-blue-300 rounded-tr-[10px] rounded-br-[10px]" type="submit">Send</button>
    </form>
  );
};
