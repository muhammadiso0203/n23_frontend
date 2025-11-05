import React, { useContext, useState } from "react";
import { AppContextWrapper } from "../context/AppContext";

export const Card = ({ username, id }) => {
  const [name, setName] = useState(username);
  const [editMode, setEditMode] = useState(false);
  const { dispatch } = React.useContext(AppContextWrapper);
  const deleteitem = () => {
    dispatch({ type: "DELETE_USER", id });
  };
  const editItem = () => {
    dispatch({ type: "EDIT_USER", value: { id, username: name } });
    setEditMode(true);
    setEditMode(false);
  };
  return (
    <div className="border my-5 border-gray-300 p-2 rounded-[10px] ">
      {editMode ? (
        <input
          className="p-2 flex flex-col outline-none "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <h2 className="p-2 outline-none">{username}</h2>
      )}
      <div className="flex gap-2">
        <button onClick={deleteitem} className="p-2 bg-blue-400 rounded-[10px]">
          Delete
        </button>
        {editMode ? (
          <>
            <button
              onClick={editItem}
              className="p-2 bg-blue-400 rounded-[10px]"
            >
              Save
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="p-2 bg-yellow-400 rounded-[10px]"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
