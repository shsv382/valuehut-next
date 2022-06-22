import React from 'react';
import contactPageStyles from './contact-page.module.scss';
import ContactData from '../../components/contact-data/contact-data.component';
import { ContactDataTypes } from '../../data/content';
import { SpinnerContainer, SpinnerMiniOverlay } from '../../components/spinner/spinner.styles';

export interface ContactProps {
    howto: string,
    offices: ContactDataTypes[]
}

const Spinner = () => (
    <SpinnerMiniOverlay>
        <SpinnerContainer />
    </SpinnerMiniOverlay>
);

const ContactPage: React.FC<ContactProps> = ({ howto, offices }) => {
    return (
        <div className={`page ${contactPageStyles.contactPage}`}>
            <div className={`${contactPageStyles.howToContact}`}>
                <h1>How to contact us</h1>
                <p>{ howto }</p>
            </div>
            <div className={`${contactPageStyles.contactDataBlock}`}>
                {
                    !offices.length ? 
                    <Spinner /> :
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