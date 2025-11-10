import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { request } from "../config/request";
import Cookies from "js-cookie";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    request.post("/login", data).then((res) => {
      if (res?.data?.accessToken) {
        Cookies.set("token", res?.data?.accessToken);
        navigate("/");
      }
    });
    reset();
  };
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl text-center mb-2 font-bold">Register</h2>
      <form className="flex flex-col  gap-2" onSubmit={handleSubmit(submit)}>
        <div>
          <input
            className="border outline-none border-gray-400 rounded-[7px] p-2"
            type="text"
            placeholder="Username"
            {...register("username")}
          />
        </div>
        <div>
          <input
            className="border outline-none border-gray-400 rounded-[7px] p-2"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div>
          <input
            className="border outline-none border-gray-400 rounded-[7px] p-2"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <button className="bg-gray-400 p-2 rounded-[7px] text-white hover:bg-gray-600 cursor-pointer">
          Send
        </button>
      </form>
    </div>
  );
};

export default Login;
