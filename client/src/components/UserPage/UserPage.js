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
<h1 className="mb-3">Welcome, Beverly</h1>
</div>
<h3 className="mb-5">
  <em></em>
</h3>
<Reminder urls={["Reminder 1","Reminder 2", "Reminder 3", "Reminder 4", "Reminder 5"]}/>
</div>
</div>
;

export default UserPage;