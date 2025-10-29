import { memo, useState } from "react";

export const Card = ({ title, id, setData }) => {
  const [showInput, setshowInput] = useState(false);
  const [input, setInput] = useState(title);

  const deleteItem = () => {
    setData((pState) => {
      const newArr = pState.filter((item) => item.id !== id);
      return newArr;
    });
  };

  const editItem = () => {
    if (showInput) {
      setData((pState) => {
        return pState.map((item) =>
          item.id === id ? { id, title: input } : item
        );
      });
    }
    setshowInput(!showInput);
  };
  return (
    <div className="container mt-2 flex justify-center">
      {!showInput ? (
        <h2 className="p-2 bg-gray-500 w-[800px]">{title}</h2>
      ) : (
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2.5 bg-gray-500 w-[800px]  "
            type="text"
          />
        </div>
      )}
      <button
        onClick={deleteItem}
        className="p-2 bg-red-500 cursor-pointer w-20 "
      >
        Delete
      </button>
      <button
        onClick={editItem}
        className="p-2 bg-blue-500 cursor-pointer w-20"
      >
        {!showInput ? "Edit" : "Save"}
      </button>
    </div>
  );
};

export default memo(Card);
