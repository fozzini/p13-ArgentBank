import { configureStore } from "@reduxjs/toolkit";
import  edition  from "../actionReducer/editProfileRequest";
import  login  from "../actionReducer/loginRequest";
import  user  from "../actionReducer/UserReducer";
import  profile  from "../actionReducer/userProfileRequest";

/**
* the store, 
*
* @return combined reducers
*/

export const store = configureStore({
  reducer: {
    login: login,
    profile: profile,
    user: user,
    edition: edition
  },
});