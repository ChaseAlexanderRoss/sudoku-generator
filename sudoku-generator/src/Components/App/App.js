import React, { Component } from 'react';
import Header from '../Header/Header';
import Rules from '../Rules/Rules';
import About from '../About/About';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				Sudoku Board goes here lol
			</div>
		);
	}
}

export default App;
