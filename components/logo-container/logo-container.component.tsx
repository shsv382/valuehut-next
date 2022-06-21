import React from 'react';
import logoStyles from './logo-container.module.scss';

import Link from 'next/link';

interface LogoTypes {
    imageURL: string,
    children?: any
}

const LogoContainer: React.FC<LogoTypes> = ({ imageURL }) => {
    return (
        <div className={`${logoStyles.logoContainer}`}>
            <Link href='/'>
                <img src={ imageURL } />
            </Link>
        </div>
    )
}

export default LogoContainer;