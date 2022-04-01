import { createSlice } from "@reduxjs/toolkit";
import { postProfile } from '../fetch/fetch';
import { userData } from "./UserReducer";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetch: {
      reducer: (draft) => {
        if (draft.status === "void") {
          draft.status = "pending";
        }
        if (draft.status === "rejected") {
          draft.error = null;
          draft.status = "pending";
        }
        if (draft.status === "resolved") {
          draft.status = "updating";
        }
      },
    },
    resolved: {
      reducer: (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
        }
      },
    },
    rejected: {
      reducer: (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.error = action.payload;
          draft.data = null;
          draft.status = "rejected";
        }
      },
    },
  },
});


export const accessProfile = () => 
  async (dispatch, getState) => {

    const token = getState().user.token;

    dispatch(actions.fetch());
   
    try {
      const data = await postProfile("/user/profile", {}, token);
      if (data.status !== 200) {
        throw new Error("Failed request");
      } else {
        dispatch(actions.resolved(data));
        const firstname = data.body.firstName;
        const lastname = data.body.lastName;
        dispatch(userData(firstname, lastname));
      }
    } catch (error) {
      dispatch(actions.rejected(error.message));
    }
  };


export default reducer;