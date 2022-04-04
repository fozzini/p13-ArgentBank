import { createSlice } from "@reduxjs/toolkit";
import { putProfile } from '../fetch/fetch';
import { userEdition } from "./UserReducer";

/**
* request profile
*
* @param Hooks - 
* @return reducer function, the state .
* @param editProfile - 
* @return check fetching status, order fetching and send action to reducer
* @return state
*/

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const {actions, reducer} = createSlice({
  name : "edition",
  initialState,
  reducers : {
    fetch : {
      reducer : (draft, action) => {
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
    const token = getState().user.token;

    dispatch(actions.fetch());

    try {
      const data = await putProfile("/user/profile",body, token);
      if (data.status !== 200) {
        throw new Error(data.message);
      } else {
        dispatch(actions.resolved(data));
        dispatch(userEdition(data.body))
      }
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
}

export default reducer;