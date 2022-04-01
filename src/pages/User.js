import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import NavSignIn from '../components/NavSignIn';
import Accounts from '../components/Accounts';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { accessProfile } from "../utils/services/actionReducer/userProfileRequest";
import { userLogout } from '../utils/services/actionReducer/UserReducer';
import { logout } from '../utils/services/actionReducer/loginRequest';
import HeaderPanel from '../components/HeaderPanel';

const User = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {status} = useSelector((state) => state.login)
  const {token} = useSelector(state => state.user);

  const dispatchLogout = () => {
    dispatch(userLogout());
    dispatch(logout());
    navigate("/");
  }

  const loadProfile = async () =>{
    const profile = async () => dispatch(accessProfile());
    await profile();
  }
  loadProfile();

  useEffect(() => {if(status === "rejected") { dispatchLogout() }},[])
  useEffect(() => {if(token === "") { dispatchLogout() }},[])
  return (
    <div>
      <HeaderPanel/>
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