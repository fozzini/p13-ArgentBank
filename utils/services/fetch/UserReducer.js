import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  firstname: "",
  lastname: "",
  editName: false,
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: {
      prepare: (token) => ({ payload: { token } }),
      reducer: (draft, action) => {
        draft.token = action.payload.token;
        return;
      },
    },
    logout: {
      reducer: () => {
        return initialState;
      },
    },
    UserData: {
      prepare: (firstname, lastname) => ({ payload: { firstname, lastname } }),
      reducer: (draft, action) => {
        draft.firstname = action.payload.firstname;
        draft.lastname = action.payload.lastname;
        return;
      }
    },
    toggleEdit: {
      reducer: (draft) => {
        draft.editName = !draft.editName;
        return;
      },
    },
    modifiedUser: {
      prepare: (body) => ({
        payload: { firstName: body.firstName, lastName: body.lastName },
      }),
      reducer: (draft, action) => {
        if (draft.editName === true) {
          draft.firstname = action.payload.firstName;
          draft.lastname = action.payload.lastName;
          draft.editName = false;
          return;
        }
        return;
      },
    },
  },
});

export const { login, logout, UserData, toggleEdit, modifiedUser } = actions;

export default reducer;