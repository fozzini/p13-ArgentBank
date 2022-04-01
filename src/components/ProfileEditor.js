import React from 'react';
import { useDispatch } from 'react-redux';
import { editProfile } from '../utils/services/actionReducer/editProfileRequest';
import { edit } from '../utils/services/actionReducer/UserReducer';

const ProfileEditor = ({ firstname, lastname }) => {
  const dispatch = useDispatch()

  const save = () =>{
    const modifiedFirstName = document.getElementById("firstnameInput").value;
    const modifiedLastName = document.getElementById("lastnameInput").value;
    const body = { firstName: modifiedFirstName, lastName: modifiedLastName };
    dispatch(editProfile(body));
  }
  const cancel = () => {
    dispatch(edit())
  }
  return (
    <div>
      <h1 className="modifiedTitle" >Welcome back<br /></h1>
      <div className="containerEditForm">
        <div className="editForm flex-end">
          <input className="field" type="text" id="firstnameInput" name="firstname" defaultValue={firstname}/>
          <button onClick={save} className="validate">Save</button>
        </div>
        <div className="editForm flex-start">  
          <input className="field" type="text" id="lastnameInput" name="lastname" defaultValue={lastname}/>
          <button onClick={cancel} className="validate">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditor;