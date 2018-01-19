import React from 'react';
import logo from '../../logo.svg';
import { Link } from "react-router-dom";

const MainPage = () =>
<div>
<div className="main">
<div className="brand">
<h1 className="mb-1">Madpass</h1>
</div>
<h3 className="mb-5">
  <em>Security is no Laughing Matter. </em>
</h3>
<Link to="/questiongen"><button className="btn-main">Generate Passphrase</button></Link>
</div>
</div>;

export default MainPage;
