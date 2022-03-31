import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import NavSignIn from '../components/NavSignIn';
import Accounts from '../components/Accounts';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { accessProfile } from "../utils/services/actionReducer/userProfileRequest";

const User = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {status} = useSelector((state) => state.login)

  const loadProfile = async () =>{
    const profile = async () => dispatch(accessProfile());
    await profile();
  }
  loadProfile();
  useEffect(() => {if(status === "rejected") { navigate("/") }},[navigate, status])

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