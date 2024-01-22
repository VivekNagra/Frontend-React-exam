import { useState } from 'react';


import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/question1">Question 1</NavLink></li> 
                <li><NavLink to="/question2">Question 2</NavLink></li>
                <li><NavLink to="/question3">Question 3</NavLink></li>
                <li><NavLink to="/question4">Question 4</NavLink></li>
                <li><NavLink to="/question5">Question 5</NavLink></li>
                <li><NavLink to="/question6">Question 6</NavLink></li>
                <li><NavLink to="/question7">Question 7</NavLink></li>
                <li><NavLink to="/question8">Question 8</NavLink></li>

                <li onMouseEnter={() => setShowDropdown(true)} 
                    onMouseLeave={() => setShowDropdown(false)}>
                    <NavLink to="/question9">Question 9</NavLink>
                    {showDropdown && (
                        <ol className="dropdown">
                            <li><NavLink to="/question9">Contrl./Unctrl. Components</NavLink></li>
                            <li><NavLink to="/question9/details">Details</NavLink></li>
                        </ol>
                    )}
                </li>

                <li><NavLink to="/question10">Question 10</NavLink></li>
                <li><NavLink to="/question11">Question 11</NavLink></li>
                <li><NavLink to="/question12">Question 12</NavLink></li>
                <li><NavLink to="/question13">Question 13</NavLink></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;