import React from 'react';
import Footer from '../components/Footer';
import NavSignIn from '../components/NavSignIn';
import Accounts from '../components/Accounts';
import Header from '../components/Header';

const User = () => {
  return (
    <div>
      <NavSignIn/>
    <main className="main bg-dark">
      <Header/>
      <Accounts/>
    </main>
    <Footer/>
    </div>
  );
};

export default User;