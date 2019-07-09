import React from 'react';

export default class Calculator extends React.Component {
    constructor(props, context) {
	super(props, context);
	this.state = {
	    error: null,
	    result: null,
	    operatorFunctions: {
		'+': function(a, b) { return a + b; },
		'-': function(a, b) { return a - b; }
	    }
	};

	this.render = this.render.bind(this);
	this.isNumber = this.isNumber.bind(this);
	this.isOperator = this.isOperator.bind(this);
	this.computeAndAdd = this.computeAndAdd.bind(this);
	this.handleExpressionChange = this.handleExpressionChange.bind(this);
    }

    isNumber(str) {
	return !Number.isNaN(Number.parseFloat(str));
    }

    isOperator(str) {
	var operators = Object.keys(this.state.operatorFunctions);
	for(var i = 0; i < operators.length; i++)
	    if(operators[i] === str)
		return true;
	return false;
    }

    computeAndAdd(result, operator, n) {
	return this.state.operatorFunctions[operator](result, n);
    }

    handleExpressionChange(e) {
	var exp = e.target.value;
	var exp_arr = exp.split(' ');
	console.log("exp_arr: ",exp_arr);
	var result = 0;
	var prevOperator = '+';
	this.state.error = null;
	this.state.result = null;
	for(var i = 0; i < exp_arr.length; i++) {
	    let elem = exp_arr[i];
	    if(elem && elem != "") {
		if(this.isNumber(elem)) {
		    result = this.computeAndAdd(result, prevOperator, Number.parseFloat(elem));
		    console.log("number");
		}
		else if(this.isOperator(elem)) {
		    prevOperator = elem;
		    console.log("operator");
		}
		else
		    this.setState({error: 'Wrong expression (format example: 4 + 5 - 0.5)'});
	    }
	}
	console.log("result: ", this.state.result);
	if(!this.state.error)
	    this.setState({result: result});
	console.log("result: ", this.state.result);
    }
    
    render() {
	return(
	    <div style={{height:'calc(100%)'}}>
	      <div style={{maxWidth: '400px', margin: 'auto', paddingTop: '50px'}}>
		<div className="input-group mb-3">
		  <div className="input-group-prepend">
		    <span className="input-group-text" id="inputGroup-sizing-default">Expression</span>
		  </div>
		  <input type="text" className="form-control" style={{textAlign: 'right'}} aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="0" onChange={this.handleExpressionChange} />
		</div>
		<p style={{color: "red"}}>{this.state.error}</p>
		<p style={{color: "green"}}>{this.state.result}</p>
	      </div>
	    </div>
	);
    }
}
