import React from 'react';
import argentBankLogo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom';
const NavSignIn = () => {
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
      <div>
        <Link to={'/User'} className="main-nav-item" >
          <i className="fa fa-user-circle"></i>
          Tony
        </Link>
        <Link to={`/`} className="main-nav-item" >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  );
};

export default NavSignIn;