import React from 'react';
import contactDataStyles from './contact-data.module.scss';
import { ContactDataTypes } from '../../data/content';

const ContactData: React.FC<ContactDataTypes> = ({ region, address, email, phone }) => {
    return (
        <ul className={`${contactDataStyles.contactData}`}>
            <li><span className={`${contactDataStyles.contactData__list__slash}`}>/ </span>
                <b>{ region } office</b>
            </li>
            <li><span className={`${contactDataStyles.contactData__list__slash}`}>/ </span>
                { address }
            </li>
            <li><span className={`${contactDataStyles.contactData__list__slash}`}>/ </span>
                <a className={`link ${contactDataStyles.contactData__link}`} href={`mailto:${email}`}>{email}</a>
            </li>
            <li><span className={`${contactDataStyles.contactData__list__slash}`}>/ </span>
                <a className={`link ${contactDataStyles.contactData__link}`} href={`tel:${phone}`}>{phone}</a>
            </li>
        </ul>
    )
}

export default ContactData;