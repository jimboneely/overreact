import React from 'react';
import logo from '../../logo.svg';
import './Reminder.css';
import { Link } from "react-router-dom";


const Reminder = ((props) =>{
	console.log(props.urls);
	let content = props.urls.map((url) => <button className="btn-main-2"> {url} </button> );
	return (
		<div>
			<div className="md-4 ">
				{content}
			</div>
			<div className="md-4 reminderdivs">
				<img src="https://media1.giphy.com/media/lA1UjqWVdmmpq/giphy.gif" />
			</div>
		</div>

	)});

export default Reminder;


