import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  count: 0,
};

const user = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const isAvalable = state.userList.find(
        (item) => item?.userName === action?.payload.userName
      );

      if (!isAvalable) {
        return {
          ...state,
          count: state.count + 1,
          userList: [...state.userList, action.payload],
        };
      }
      return state;
    },
    deleteUser: (state, action) => {
      const newState = state.userList.filter(
        (item) => item.userName !== action.payload.userName
      );
      return {
        ...state,
        count: state.count - 1,
        userList: newState
      };
    },
    updateUser: (state, action) => {
      const newUser = state.userList.findIndex(
        (item) => item.userName === action.payload.userName
      );
      if (newUser !== -1) {
        state.userList[newUser].userName = action.payload.newName;
      }
    },
  },
});

export default user.reducer;

export const { addUser, deleteUser, updateUser } = user.actions;
