import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "../fetch/fetch"
import { login } from "./UserReducer"

/**
* request login
*
* @param Hooks - 
* @return reducer function, the state .
* @param requestLogin - 
* @return check fetching status, order fetching and send action to reducer
* @return state
*/

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: {
      reducer: () => {
        return initialState;
      }
    },
    fetch: {
      reducer : (draft) => {
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
      }
    },
    resolved: {
      reducer: (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
        }
      }
    },
    rejected: {
      reducer : (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.error = action.payload;
          draft.data = null;
          draft.status = "rejected";
        }
      }
    }
  }
})

export const requestLogin = () => 
  async (dispatch) => {
    dispatch(actions.fetch());
    try {
      
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const body = { email: email, password: password };
      const data = await postLogin("/user/login", body);

      if (data.status !== 200) {
        throw new Error(data.message);
      } 
      else {
        dispatch(actions.resolved(data));
        dispatch(login(data.body.token));
      }
    } catch (error) {
      dispatch(actions.rejected(error.message));
    }
  };

export const { logout } = actions;
export default reducer;