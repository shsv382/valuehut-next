import React from 'react';
import './logo-container.module.scss';

import Link from 'next/link';

interface LogoTypes {
    imageURL: string,
    children?: any
}

const LogoContainer: React.FC<LogoTypes> = ({ imageURL }) => {
    return (
        <div className='logo-container'>
            <Link to='/'>
                <img src={ imageURL } />
            </Link>
        </div>
    )
}

export default LogoContainer;