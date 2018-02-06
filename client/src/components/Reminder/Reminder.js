import React from 'react';
import logo from '../../logo.svg';
import './Reminder.css';
import { Link } from "react-router-dom";


const Reminder = ((props) =>{
	console.log(props.urls);
	let content = props.urls.map((url) => <button className="btn-main-2"> {url} </button> );
	return (

		<React.Fragment>
			{content}
		</React.Fragment>
	)});

export default Reminder;


