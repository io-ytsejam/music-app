import React, { Component } from 'react';
import './App.css';
import {Producer, Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar.js';

import store from './store.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hello: ""
		};

		fetch("/surprise")
			.then(response => response.json())
			.then(data => {this.setState({ hello: data.hello })})
			.catch(err => { throw err });
	}




	render () {
		return (
			<div>
				<NavBar />
				<Provider store={store}>
					<h3>Not welcome ;-(</h3>
				</Provider>
			</div>
		);
	}

}

export default App;
