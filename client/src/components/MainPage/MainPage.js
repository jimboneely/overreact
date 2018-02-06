import React from 'react';
import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import SimpleSlider from '../Slide/';
import "./MainPage.css";

const MainPage = () =>
<div>

<div className="jumbotron jumbotron-fluid">

    <div className="row">
    <div className="col-10"></div>
    <div className="col-2 text-center">
    </div>
   </div>


<div className="container main-page">
<div className="row">

<div className="col">
</div>

<div className="col-8">

<svg width="211px" height="221px" viewBox="0 0 211 221" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontWeight="normal" fontFamily="Flavors-Regular, Flavors" letterSpacing="40" fontSize="288">
        <g id="Group" transform="translate(0.000000, -77.000000)" fill="#3AAFA9">
            <text id="M">
                <tspan x="0" y="296">M</tspan>
            </text>
        </g>
    </g>
</svg>


<svg width="225px" height="225px" viewBox="0 0 225 225" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" className="a-letter-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontWeight="normal" fontFamily="Flavors-Regular, Flavors" letterSpacing="40" fontSize="288">
        <g id="Group"  fill="#2B7A78">
            <text id="a">
                <tspan x="40" y="210">a</tspan>
            </text>
        </g>
    </g>
</svg>


<svg width="225px" height="222px" viewBox="0 0 225 222" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontWeight="normal" fontFamily="Flavors-Regular, Flavors" letterSpacing="40" fontSize="288">
        <g id="Group" transform="translate(-465.000000, -72.000000)" fill="#3AAFA9">
            <text id="d">
                <tspan x="461" y="285">d</tspan>
            </text>
        </g>
    </g>
</svg>


<svg width="225px" height="223px" viewBox="0 0 225 223" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontWeight="normal" fontFamily="Flavors-Regular, Flavors" letterSpacing="40" fontSize="288">
        <g id="Group" transform="translate(-761.000000, -77.000000)" fill="#2B7A78">
            <text id="P">
                <tspan x="800" y="296">P</tspan>
            </text>
        </g>
    </g>
</svg>


<svg width="225px" height="225px" viewBox="0 0 225 225" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" className="a-letter-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontWeight="normal" fontFamily="Flavors-Regular, Flavors" letterSpacing="40" fontSize="288">
        <g id="Group"  fill="#3AAFA9">
            <text id="a" >
                <tspan x="40" y="210">a</tspan>
            </text>
        </g>
    </g>
</svg>



<svg width="259px" height="280px" viewBox="0 0 259 280" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontSize="288" fontFamily="Flavors-Regular, Flavors" letterSpacing="40" fontWeight="normal">
        <text id="ss">
            <tspan x="-7" y="300" fill="#2B7A78">s</tspan>
            <tspan x="143.53125" y="350" fill="#3AAFA9">s</tspan>
        </text>
    </g>
</svg>

</div>

<div className="col">
</div>

</div>


</div>

    <div className="row">
    <div className="col"></div>
    <div className="col-6 text-center">
        <h2>Security <i>is not</i> a laughing matter. </h2>
    </div>
    <div className="col"></div>

    </div>

    <br />

    <div className="row">
    <div className="col"></div>
    <div className="col-6 text-center">
    <Link to="/questiongen"><button className="btn-main">Generate Passphrase</button></Link>
    </div>
    <div className="col"></div>
    </div>
</div>
</div>

export default MainPage;
