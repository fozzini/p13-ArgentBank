import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from '../utils/services/actionReducer/loginRequest';

const Button = () => {
  
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {status} = useSelector((state) => state.login)
  
  const loginSubmit = async (e) =>{
    e.preventDefault();
    const login = async () => dispatch(requestLogin());
    await login();
  }

  useEffect(() => {if(status === "rejected") { 
    setErrorMessage("Incorrect password or login !")}},[status])

  useEffect(() => {if(status === "resolved") { 
    navigate("/user") }},[navigate, status])
  
  return (
    <div>
      <button onClick={loginSubmit} type="submit" className="sign-in-button">Sign In</button>
      {errorMessage && <div className="error"> {errorMessage} </div>}
    </div>
  );
};

export default Button;