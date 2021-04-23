import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './navBar.css';
import Icon from '@material-ui/core/Icon';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Hi I'm Scot <i className='fas fa-laptop-code'></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                <i className={click ? 'fas fa-home' : 'fas fa-home'} /> Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/About-me'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                About me
                         </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Email-me'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Email me <i class="fas fa-envelope"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar
