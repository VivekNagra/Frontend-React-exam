import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/question1">Question 1</NavLink></li> 
                <li><NavLink to="/question2">Question 2</NavLink></li>
                <li><NavLink to="/question3">Question 3</NavLink></li>
                <li><NavLink to="/question4">Question 4</NavLink></li>
                <li><NavLink to="/question5">Question 5</NavLink></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;