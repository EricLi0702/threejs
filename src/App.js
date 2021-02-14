import React, { Component } from 'react';
import jQuery from 'jquery';

import './App.css';

import Home from './components/Home';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Home
				></Home>
			</div>
		);
	}
}
