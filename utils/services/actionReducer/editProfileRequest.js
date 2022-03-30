import { createSlice } from "@reduxjs/toolkit";
import putProfile from '../fetch';
import { modifiedUser } from "./UserReducer";
import { promiseStatus } from "../utils/selectors/selectors";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const {actions, reducer} = createSlice({
  name : "modify",
  initialState,
  reducers : {
    fetch : {
      reducer : (draft) => {
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
      }
    },
    resolved : {
      reducer : (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
          return;
        }
        return;
      }
    },
    rejected : {
      reducer : (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.error = action.payload;
          draft.data = null;
          draft.status = "rejected";
          return;
        }
        return;
      }
    },
  }
})


export const editProfile = (body) => {
  return async (dispatch, getState) => {
    const status = promiseStatus(getState(), "modify");
    const token = getState().user.token;

    if (status === "pending" || status === "updating") {
      return;
    }

    dispatch(actions.fetch());

    try {
      const data = await putProfile("/user/profile",body, token);
      if (data.status !== 200) {
        throw new Error(data.message);
      } else {
        dispatch(actions.resolved(data));
        dispatch(modifiedUser(data.body))
      }
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
}

export default reducer;