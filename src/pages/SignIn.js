import React from 'react';
import Footer from '../components/Footer';
import NavSignOut from '../components/NavSignOut';
import Form from '../components/Form';

/**
* create signin page
* @return html - sign in page
*/

const SignIn = () => {
  return (
    <div>
    <NavSignOut/>
    <Form/>
    <Footer/>
    </div>
  );
};

export default SignIn;