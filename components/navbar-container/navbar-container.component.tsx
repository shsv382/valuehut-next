import React, { useState } from 'react';
import PopupMenuTraining from '../popup-menu-training/popup-menu-training.component';
import Link from 'next/link';
import './navbar-container.module.scss';

const NavbarContainer: React.FC = () => {
    const [ popupMenu, showPopupMenu ] = useState(false);
    return (
        <nav className='navbar-container'>
            <Link href='/' className='link link-reverse navbar__link navbar__home-link'>Home</Link>
            <span onClick={()=>showPopupMenu(!popupMenu)} className='popup-menu-item link link-reverse navbar__link navbar__what-we-do'>
                <span className="navbar__what-we-do__placeholder">Services</span>
                <PopupMenuTraining classname="popup-menu-training" isVisible={popupMenu} />
            </span>
            <Link href='/about' className='link link-reverse navbar__link'>About Us</Link>
            <Link href='/contact' className='link link-reverse navbar__link'>Contact Us</Link>
        </nav>
    )
}

export default NavbarContainer;