import React from 'react'
import './styles/style.css'


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
                    <h1 className="logo">TITLE</h1>
                    <button aria-label="open navigation" className="open-nav" onClick={this.closeNav}>&#9776;</button>
                    <nav className="nav"> 
                        <button aria-label="close navigation" className="close-nav" onClick={this.closeNav}>&times;</button>
                        <ul className="nav-list">
                            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Upcoming Launches</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Previous Launches</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Rockets</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">About Spacex</a></li>
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