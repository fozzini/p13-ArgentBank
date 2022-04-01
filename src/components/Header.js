import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileEditor from './ProfileEditor';
import { edit } from "../utils/services/actionReducer/UserReducer";
const Header = () => {
  const dispatch = useDispatch()
  const {firstname, lastname, editName} = useSelector(state => state.user);
  
  const editMode = () => {
    dispatch(edit())
  }
  
  return editName ? (
    <ProfileEditor firstname={firstname} lastname={lastname}/>
  ) : (
    <div className="header">
      <h1 className="title">Welcome back<br />{firstname} {lastname}!</h1>
      <button onClick={editMode} className="edit-button">Edit Name</button>
    </div>
  );
};

export default Header;