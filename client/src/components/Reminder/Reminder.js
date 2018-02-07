import React from 'react';
import logo from '../../logo.svg';
import './Reminder.css';
import { Link } from "react-router-dom";
import DisplayImage from '../DisplayImage/';

const Reminder = ((props) =>{
	console.log("Reminder",Object.values(props.urls));
	let image = "https://media1.giphy.com/media/lA1UjqWVdmmpq/giphy.gif";
		
	let changeImage = (e)=>{
		console.log('changeImage', e);
		image = e;
	}
	let content = Object.values(props.urls).map((url) => <button onClick={()=>changeImage(url)} className="btn-main-2"> {url} </button> );
	return (
		<div>
			<div className="col-md-6 ">
				{content}
			</div>
			<div className="col-md-4 reminderdivs">
				<DisplayImage image={image} />
			</div>
		</div>

	)});

export default Reminder;


