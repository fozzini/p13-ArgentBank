import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { requestLogin } from '../utils/services/actionReducer/loginRequest';

/**
* create Form Html
*
* @param LoginSubmit - 
* @return user login 
* @return html - Form
*/
const Form = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {status} = useSelector((state) => state.login)
  
  const loginSubmit = async (e) =>{
    e.preventDefault();
    const login = async () => dispatch(requestLogin(userName, password));
    await login();
  }

  useEffect(() => {if(status === "rejected") { 
    setErrorMessage("Incorrect password or login !")}},[status])

  useEffect(() => {if(status === "resolved") { 
    navigate("/user") }},[navigate, status])

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form >
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input onChange={e => setUserName(e.target.value)} type="text" id="username" autoComplete='e-mail' />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input onChange={e => setPassword(e.target.value)} type="password" autoComplete='current-password' id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div>
            <button onClick={loginSubmit} type="submit" className="sign-in-button">Sign In</button>
            {errorMessage && <div className="error"> {errorMessage} </div>}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
 