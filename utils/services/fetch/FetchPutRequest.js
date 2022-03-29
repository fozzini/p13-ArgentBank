import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { modifiedUser } from "./UserReducer";
import { selectorStatus } from "../utils/selectors/selectors";

const putRequest = async (url, body, token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios
    .put(url, body)
    .then((response) => response.data)
    .catch((error) => error);
}

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


export const modifyUserData = (body) => {
  return async (dispatch, getState) => {
    const status = selectorStatus(getState(), "modify");
    const token = getState().user.token;
    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(actions.fetch());
    try {
      const data = await putRequest("/user/profile",body, token);
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