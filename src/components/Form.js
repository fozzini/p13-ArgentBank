import React from 'react';
import Button from './Button';

const Form = () => {

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form >
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete='e-mail' />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" autoComplete='current-password' id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button/>
        </form>
      </section>
    </div>
  );
};

export default Form;
 