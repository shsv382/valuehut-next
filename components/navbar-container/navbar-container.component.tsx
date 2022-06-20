import React from 'react';
import PopupMenuTraining from '../popup-menu-training/popup-menu-training.component';

import { useAppDispatch } from '../../redux/hooks';
import { showPopupMenuTraining } from '../../redux/app/app.actions';

import Link from 'next/link';
import './navbar-container.module.scss';

const NavbarContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <nav className='navbar-container'>
            <Link to='/' className='link link-reverse navbar__link navbar__home-link'>Home</Link>
            {/* <Link to='/training' className='link navbar__link'>What We Do</Link> */}
            <span onClick={()=>dispatch(showPopupMenuTraining())} className='popup-menu-item link link-reverse navbar__link navbar__what-we-do'>
                <span className="navbar__what-we-do__placeholder">Services</span>
                <PopupMenuTraining classname="popup-menu-training" />
            </span>
            <Link to='/about' className='link link-reverse navbar__link'>About Us</Link>
            <Link to='/contact' className='link link-reverse navbar__link'>Contact Us</Link>
        </nav>
    )
}

export default NavbarContainer;