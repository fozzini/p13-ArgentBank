import { createSlice } from "@reduxjs/toolkit";
import {postLogin} from "../fetch/fetch"
import { promiseStatus } from "../utils/selectors/selectors";
import {login} from "../features/user";


const initialState = {
  status: "void",
  data: null,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "login",
  initialState,
  reducers: {
    fetch: {
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
    resolved: {
      reducer: (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
          return;
        }
        return;
      }
    },
    rejected: {
    reducer : (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.error = action.payload;
        draft.data = null;
        draft.status = "rejected";
        return;
      }
      return;
    }
  }
}
});

export const requestLogin = () => 
  async (dispatch, getState) => {
    const status = promiseStatus(getState(), "login");

    if (status === "pending" || status === "updating") {
      return;
    }

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

export default reducer;