import React from 'react'
import './styles/style.css'
import {Switch, Route, Link} from "react-router-dom"

import dummy from './Upcoming';

class Header extends React.Component {
    constructor() {
        super() 
        this.state = {
            error: true 
        }
        this.closeNav = this.closeNav.bind(this);
    }

    closeNav() {
        const closeButton = document.querySelector('.close-nav');
        const openButton = document.querySelector('.open-nav');
        const nav = document.querySelector('.nav');

        closeButton.addEventListener("click", () => {
            nav.classList.remove('navigation-open');
        });

        openButton.addEventListener("click", () => {
            nav.classList.add('navigation-open');
        });
    }


    render () {
        return (
            <header className="header main-grid ">
                <div className="header-content container">
                    <h1 className="logo">
                        <Link to="/">SPACEX</Link>
                        </h1>
                    <button aria-label="open navigation" className="open-nav" onClick={this.closeNav}>&#9776;</button>
                    <nav className="nav"> 
                        <button aria-label="close navigation" className="close-nav" onClick={this.closeNav}>&times;</button>
                        <ul className="nav-list">
                            <li className="nav-item"><Link to="/upcoming" className="nav-link">Upcoming</Link></li>
                            <li className="nav-item"><Link to="/previous" className="nav-link">Previous</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        </ul>
                    </nav>
                    <label htmlFor="nav-toggle" className="nav-toggle-label">
                        <span></span>
                    </label>
                </div>
            </header>
        )
    }
}
export default Header