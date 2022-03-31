import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from "../utils/services/selectors/selectors"
const Header = () => {
  const {firstname, lastname} = useSelector(state => state.user);
  return (
    <div className="header">
      <h1>Welcome back<br />{firstname} {lastname}!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default Header;