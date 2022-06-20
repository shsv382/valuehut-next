import React from "react";
import { useAppSelector } from "../../redux/hooks";
import './previous-clients.module.scss';
import TripleBox from "../triple-box/triple-box.component";
import ClientBox from "../client-box/client-box.component";

const PreviousClients = () => {
    const previousClients = useAppSelector(state => state.content.pages.home.previousClients);
    return (
        <div className="previous-clients">
            <h1 className="previous-clients__header">Previous clients</h1>
            <div className="previous-clients__carousel">
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