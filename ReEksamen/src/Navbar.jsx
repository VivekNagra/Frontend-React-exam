import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/question1">Question 1</Link></li> 
                <li><Link to="/question2">Question 2</Link></li>
                <li><Link to="/question3">Question 3</Link></li>
                <li><Link to="/question4">Question 4</Link></li>
                <li><Link to="/question5">Question 5</Link></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;