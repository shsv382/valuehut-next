import React from 'react';
import './contact-page.module.scss';
import { ContactDataTypes } from '../../data/content';

import { useAppSelector } from '../../redux/hooks';

import ContactData from '../../components/contact-data/contact-data.component';

const ContactPage: React.FC = () => {
    const { offices, howto } = { ...useAppSelector((state) => (state.content.pages.contact)) };
    return (
        <div className='page contact-page'>
            <div className='how-to-contact'>
                <h1>How to contact us</h1>
                <p>{ howto }</p>
            </div>
            <div className='contact-data-block'>
                {
                    offices.map(({ region, address, email, phone }) => (
                        <ContactData 
                            region={region}
                            email={email}
                            phone={phone}
                            address={address}
                            key={address}
                        />
                    ))
                }
            </div>
        </div>
    )
};           

export default ContactPage;