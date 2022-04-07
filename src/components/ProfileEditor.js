import React from 'react';
import { useDispatch } from 'react-redux';
import { editProfile } from '../utils/services/actionReducer/editProfileRequest';
import { edit } from '../utils/services/actionReducer/UserReducer';

/**
* create editor mode
*
* @param Hooks - 
* @return  redirection, reducer function.
* @param save and cancel
* @return user log out 
* @return html - editor mode
* @return save and cancel function
*/

const ProfileEditor = ({ firstname, lastname }) => {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = React.useState(firstname);
  const [lastName, setLastName] = React.useState(lastname);

  const save = () =>{
    dispatch(editProfile({ firstName: firstName, lastName: lastName }));
  }
  const cancel = () => {
    dispatch(edit())
  }
  return (
    <div>
      <h1 className="modifiedTitle" >Welcome back<br /></h1>
      <div className="containerEditForm">
        <div className="editForm flex-end">
          <input className="field"
                 type="text" 
                 id="firstnameInput" 
                 name="firstname" 
                 defaultValue={firstname} 
                 onChange={e => setFirstName(e.target.value)}/>
          <button onClick={save} 
                  className="validate">Save</button>
        </div>
        <div className="editForm flex-start">  
          <input className="field" 
                 type="text"  
                 id="lastnameInput" 
                 name="lastname" 
                 defaultValue={lastname} 
                 onChange={e => setLastName(e.target.value)}/>
          <button onClick={cancel} 
                  className="validate">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditor;