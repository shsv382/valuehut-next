import React from 'react';
import './contact-data.module.scss';
import { ContactDataTypes } from '../../data/content';

const ContactData: React.FC<ContactDataTypes> = ({ region, address, email, phone }) => {
    return (
        <ul className='contact-data'>
            <li><span className="contact-data__list__slash">/ </span>
                <b>{ region } office</b>
            </li>
            <li><span className="contact-data__list__slash">/ </span>
                { address }
            </li>
            <li><span className="contact-data__list__slash">/ </span>
                <a className='link contact-data__link' href={`mailto:${email}`}>{email}</a>
            </li>
            <li><span className="contact-data__list__slash">/ </span>
                <a className='link contact-data__link' href={`tel:${phone}`}>{phone}</a>
            </li>
        </ul>
    )
}

export default ContactData;