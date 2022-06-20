import React, { useState } from 'react';
import headerStyles from './header.module.scss';

import LogoContainer from '../logo-container/logo-container.component';
import NavbarContainer from '../navbar-container/navbar-container.component';
import CartButtonContainer from '../cart-button-container/cart-button-container.component';
import PopupMenuTraining from '../popup-menu-training/popup-menu-training.component';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    window.onscroll = () => {
        if(document.documentElement.scrollTop > 80) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    };
    return (
        <header className={`header`} style={{
            height: scrolled ? 80 : "", transition: "all 0.25s"
        }}>
            <div className={`${headerStyles.headerContainer}`} id="start">
                <LogoContainer imageURL='/logo/logo-standalone.png' />
                <NavbarContainer />
                <CartButtonContainer />
            </div>
        </header>
    )
}

export default Header;