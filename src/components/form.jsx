import { nanoid } from "nanoid";
import React, { memo } from "react";

const Form = ({setData}) => {
  const [input, setInput] = React.useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    setData((pState) => {
        return[...pState, {title: input, id: nanoid()}]
    });
    setInput("")
    
}

  return (
    <div className="container mt-4 flex justify-center">
      <form action="" onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Yozing..." className="p-2.5 bg-gray-500 w-[800px]"/>
        <button className="p-2.5 bg-blue-500 cursor-pointer w-40">Submit</button>
      </form>
    </div>
  );
};

export default memo(Form);
