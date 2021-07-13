import React, {useState} from 'react';
import './Navbar.css';
import logo from '../../imgs/logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoCloseSharp} from 'react-icons/io5';

export default function Navbar (props) {
    const [navbar, setNavbar] = useState(true)

    window.addEventListener('resize', () => (window.innerWidth <= 500) ? setNavbar(false) : setNavbar(true))
    return(
        <nav>
            <div className='nav-container'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt='KON Ramen Logo' />
                    <button className='menu-btn' onClick={() => setNavbar(!navbar)}>
                        { navbar ? <IoCloseSharp /> : <GiHamburgerMenu /> }
                    </button>
                    {navbar}
                </div>
                <div className='nav-links-container'>
                    <ul className={navbar ? 'nav-links' : 'nav-links hide-nav'}>
                        <li className='nav-link'>Hi, {props.user.firstName} !</li>
                        <li className='nav-link'>Membership Points : {props.user.membershipPoints}</li>
                        <li className='nav-link'><a href='/'>Edit Profile</a></li>
                        <li className='nav-link'><a href='/'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}