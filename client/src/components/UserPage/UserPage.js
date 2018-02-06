import React from 'react';
import logo from '../../logo.svg';
import './UserPage.css';
import { Link } from "react-router-dom";
import Reminder from '../Reminder/';
import firebase, { auth, provider, user } from '../../firebase.js';
import {App} from "../../App"


const UserPage = () =>
<div>

<div className="main">
<div className="brand">
<h1 className="mb-1">Madpass</h1>
</div>
<h3 className="mb-5">
  <em>User Page</em>
</h3>
<Reminder urls={["test","test2"]}/>
</div>
</div>
;

export default UserPage;