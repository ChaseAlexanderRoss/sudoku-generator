import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
	render() {
		return (
			<div>
				<nav>
					<Link to="/">
						<h2>Sudoku</h2>
					</Link>
					<Link to="/about">
						<h2>About</h2>
					</Link>
					<Link to="/rules">
						<h2>Rules of Sudoku</h2>
					</Link>
				</nav>
			</div>
		);
	}
}

export default Header;
