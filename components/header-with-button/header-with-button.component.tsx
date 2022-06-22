import React from "react";
import hwbStyles from './header-with-button.module.scss';
import Link from 'next/link';
// import { Link, useNavigate } from 'react-router-dom';

interface HeaderWithButtonProps {
    header: string,
    link: string,
    href: string,
    otherProps?: any[]
}

const HeaderWithButton = ({ header, link, href, otherProps }: HeaderWithButtonProps) => {
    // const navigate = useNavigate(); 
    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();
    //     navigate(`../${href}`)
    // }
    return (
        <div className={`${hwbStyles.headerWithButton}`}>
            <h1 className={`${hwbStyles.headerWithButton__header}`}>{header}</h1>
            <br className="xs-visible" />
            <Link href={href}><button className="button button-secondary button-secondary-large">{link}</button></Link>
        </div>
    )
}

export default HeaderWithButton;