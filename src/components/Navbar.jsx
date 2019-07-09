import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ title, user, onLogout, onBack, onSearchChange }) {
    return (
	<nav style={{minHeight :"55px !important"}} className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
	  <NavLink className="navbar-brand" to="/">{ title }</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar">
	    <ul className="navbar-nav mr-auto">
	      <li className="nav-item">
		<NavLink className="nav-link" to="/">Calculator</NavLink>
	      </li>
	    </ul>
          </div>
	</nav>
    );
}
