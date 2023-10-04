import React from "react";
import "../styles/navbar.css"; // Adjust the path to your CSS file

const Navbar = () => {
    return (
        <nav className="horizontal-navbar">
            <div className="centered-content">
                <h1>Samuel Jennings</h1>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="/music">Music</a>
                    </li>
                    <li className="nav-item">
                        <a href="/writings">Writings</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
