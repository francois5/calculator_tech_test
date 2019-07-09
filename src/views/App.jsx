import React from 'react';
import { Route, Link, Router, Switch } from 'react-router-dom';

import Calculator from './Calculator.jsx';

import Navbar from '../components/Navbar.jsx';

import history from '../history';

export default class App extends React.Component {
    constructor(props, context) {
	super(props, context);
	this.state = {

	};

	this.render = this.render.bind(this);
    }

    componentDidMount() {

    }
    
    render() {
	return(
	    <Router history={history}>
	      <div style={{height:'100%'}}>
		<Navbar title={"Calculator tech test"}></Navbar>
		<div style={{height:'55.97px'}}></div>
	        <div style={{height:'calc(100% - 55.97px)', overflow:'auto'}} className="scrollbar-deep-purple bordered-deep-purple thin">
		  <Switch>
		    <Route exact path="/" component={Calculator} />
		  </Switch>
		</div>
	      </div>
	    </Router>
	);
    }
}
