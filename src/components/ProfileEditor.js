import React from 'react';
import { useDispatch } from 'react-redux';
import { edit } from "../utils/services/actionReducer/UserReducer";


const ProfileEditor = ({ firstname, lastname }) => {
  const dispatch = useDispatch()

  const editMode = () => {
    dispatch(edit())
  }
  
  return (
    <div>
      <div>
        <input type="text" id="firstnameInput" name="firstname" defaultValue={firstname}/>
        <input type="text" id="lastnameInput" name="lastname" defaultValue={lastname}/>
      </div>
      <div>
        <button onClick={editMode} className="edit-button">Validate</button>
        <button onClick={editMode} className="edit-button">Cancel</button>
      </div>
    </div>
  );
};

export default ProfileEditor;