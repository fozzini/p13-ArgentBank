import { createSlice } from "@reduxjs/toolkit";
import { postProfile } from '../fetch';
import { promiseStatus } from "../utils/selectors/selectors";
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
          return;
        }
        if (draft.status === "rejected") {
          draft.error = null;
          draft.status = "pending";
          return;
        }
        if (draft.status === "resolved") {
          draft.status = "updating";
          return;
        }
        return;
      },
    },
    resolved: {
      reducer: (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
          return;
        }
        return;
      },
    },
    rejected: {
      reducer: (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.error = action.payload;
          draft.data = null;
          draft.status = "rejected";
          return;
        }
        return;
      },
    },
  },
});


export function accessProfile() {
  return async (dispatch, getState) => {
    const status = promiseStatus(getState(), "profile");
    const token = getState().user.token;

    if (status === "pending" || status === "updating") {
      return;
    }

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
}

export default reducer;