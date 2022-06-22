import { url } from 'inspector';
import React from 'react';
import clientBoxStyles from './client-box.module.scss';
import { TrainingTypes } from '../../data/training';
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PreviousClientsTypes } from '../../data/content';

interface ClientBoxTypes extends PreviousClientsTypes {
    children?: any
}

const ClientBox: React.FC<ClientBoxTypes> = ({name, imageURL}) => {
    return (
        <div className={`${clientBoxStyles.clientBox}`}>
                <img
                    className={`${clientBoxStyles.clientBox__imageContent}`}
                    alt={`${name}`}
                    src={`images/clients/${imageURL}`}
                />
                <h3 className={`${clientBoxStyles.clientBox__textContent}`}>
                    { name }
                </h3>
        </div>
    )
}

export default ClientBox;
