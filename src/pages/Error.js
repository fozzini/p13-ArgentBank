import React from 'react';
import Footer from '../components/Footer';
import NavSignOut from '../components/NavSignOut';

/**
* create error page
*
* @return html - error page
*/
const Error = () => {
  return (
    <div>
    <NavSignOut/>
    <div className="main bg-dark">
      <h1 className="errorFont">OOOOps!! something went wrong</h1>
    </div>
    <Footer/>
    </div>
  );
};

export default Error;