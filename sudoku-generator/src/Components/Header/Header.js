import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className="placeholder">
						<Link to="/">
							<h2>Sudoku</h2>
						</Link>
					</div>
					<div className="placeholder">
						<Link to="/about">
							<h2>About</h2>
						</Link>
					</div>
					<div className="placeholder">
						<Link to="/rules">
							<h2>Rules of Sudoku</h2>
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
