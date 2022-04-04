import React from 'react';
import argentBankLogo from '../assets/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from "../utils/services/actionReducer/UserReducer"
import { logout } from "../utils/services/actionReducer/loginRequest"

/**
* create Sign in nav
*
* @param Hooks - 
* @return  redirection, reducer function, the state .
* @param dispatchLogout - 
* @return user log out 
* @return html - sign in nav
*/
const NavSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {firstname} = useSelector(state => state.user);
  
  const dispatchLogout = () => {
    dispatch(userLogout());
    dispatch(logout());
    navigate("/");
  }

  return (
    <nav className="main-nav">
      <Link to={`/`} className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="main-nav-item-container">
        <Link to={'/User'} className="main-nav-item" >
          <i className="fa fa-user-circle"></i>
          {firstname}
        </Link>
        <div onClick={dispatchLogout} className="main-nav-item" >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </div>
      </div>
    </nav>
  );
};

export default NavSignIn;