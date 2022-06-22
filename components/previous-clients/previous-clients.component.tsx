import React from "react";
import previousClientsStyles from './previous-clients.module.scss';
import TripleBox from "../triple-box/triple-box.component";
import ClientBox from "../client-box/client-box.component";
import { PreviousClientsTypes } from '../../data/content';

interface PreviousClientsComponentTypes {
    previousClients: PreviousClientsTypes[]
}

const PreviousClients: React.FC<PreviousClientsComponentTypes> = ({ previousClients }) => {
    return (
        <div className={`${previousClientsStyles.previousClients}`}>
            <h1 className={`${previousClientsStyles.previousClients__header}`}>Previous clients</h1>
            <div className={`${previousClientsStyles.previousClients__carousel}`}>
                {
                    <>
                        {previousClients.map((client, i) => <ClientBox {...client} key={`client-${i}`} />)}
                        {previousClients.map((client, i) => <ClientBox {...client} key={`client-${1000+i}`} />)}
                    </>
                }
            </div>
        </div>  
        
    )
}

export default PreviousClients;