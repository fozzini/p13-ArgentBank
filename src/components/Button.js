import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestLogin } from '../utils/services/actionReducer/loginRequest';
import { accessProfile } from '../utils/services/actionReducer/userProfileRequest';
import { store } from '../utils/services/store/store';


const Button = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const loginSubmit = async (e) =>{
    e.preventDefault();
    const login = async () => dispatch(requestLogin());
    await login();
    const profile = async () => dispatch(accessProfile());
    await profile();
    const status = store.getState().login.status;
    if(status === "rejected") { setErrorMessage("Incorrect password or login !")}
    if(status === "resolved") { navigate("/user") }
  }
  
  return (
    <div>
      <button onClick={loginSubmit} type="submit" className="sign-in-button">Sign In</button>
      {errorMessage && <div className="error"> {errorMessage} </div>}
    </div>
  );
};

export default Button;