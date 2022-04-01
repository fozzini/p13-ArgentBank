import React from 'react';
import { useDispatch } from 'react-redux';
import { editProfile } from '../utils/services/actionReducer/editProfileRequest';

const ProfileEditor = ({ firstname, lastname }) => {
  const dispatch = useDispatch()

  const modify = () =>{
    const modifiedFirstName = document.getElementById("firstnameInput").value;
    const modifiedLastName = document.getElementById("lastnameInput").value;
    const body = { firstName: modifiedFirstName, lastName: modifiedLastName };
    dispatch(editProfile(body));
  }

  return (
    <div>
      <div className="editForm">
        <label htmlFor="firstname">Firstname</label>
        <input type="text" id="firstnameInput" name="firstname" defaultValue={firstname}/>
        <label htmlFor="lastname">Lastname</label>
        <input type="text" id="lastnameInput" name="lastname" defaultValue={lastname}/>
      </div>
      <div>
        <button onClick={modify} className="edit-button">Validate</button>
      </div>
    </div>
  );
};

export default ProfileEditor;