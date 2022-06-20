import React from "react";
import './header-with-button.module.scss';

import { Link, useNavigate } from 'react-router-dom';

interface HeaderWithButtonProps {
    header: string,
    link: string,
    href: string,
    otherProps?: any[]
}

const HeaderWithButton = ({ header, link, href, otherProps }: HeaderWithButtonProps) => {
    const navigate = useNavigate(); 
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate(`../${href}`)
    }
    return (
        <div className="header-with-button">
            <h1 className="header-with-button__header">{header}</h1>
            <br className="xs-visible" />
            <button onClick={handleClick} className="button button-secondary button-secondary-large">{link}</button>
        </div>
    )
}

export default HeaderWithButton;