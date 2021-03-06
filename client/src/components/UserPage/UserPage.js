import React from 'react';
import './UserPage.css';
import { Link } from "react-router-dom";
import Reminder from '../Reminder/';
import firebase, { auth, provider } from '../../firebase.js';


const UserPage = (props) => {
  console.log("UserPage", props)
  const currentUser = Object.assign({},auth.currentUser)
  const username = currentUser.displayName;
  return(
    <div>
  
    <div className="main">
    <div className="brand">
    <h1 className="mb-3">Welcome {username}</h1>
    </div>
    <h3 className="mb-5">
      <em></em>
    </h3>
    <Reminder urls={props.passphrase}/>
    </div>
    </div>
  )}

export default UserPage;