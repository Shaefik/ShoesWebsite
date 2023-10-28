import React, { useState } from 'react';
import './Navbar.css';
import Home from './Home';
function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className='navbar-container'>
            <a className='tag' href=''>MY REACT APP</a>
            <a className='home' href=''>Home</a>
            <a href="#" className='project' onClick={toggleDropdown}>
                Project
            </a>
            {isDropdownVisible && (
                <ul className="dropdown-content">
                    <li><a href="">Home</a></li>
                    <li><a href="#">Factorial</a></li>
                    <li><a href="#">Word Count</a></li>
                    <li><a href="#">Counter</a></li>

                </ul>
            )}
        </div>
    );
}

export default Navbar;
