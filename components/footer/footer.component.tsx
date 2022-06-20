import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { changeRegion } from '../../redux/app/app.actions';
import { ContactDataTypes } from '../../data/content';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './footer.module.scss';
import LogoContainer from '../logo-container/logo-container.component';

interface FooterTypes {
    howto?: string 
    offices: ContactDataTypes[], 
}

const Footer: React.FC<FooterTypes> = ({ howto, offices }) => {
    const region = useAppSelector(state => state.app.region);
    const dispatch = useAppDispatch();
    const handleChange = (event: SelectChangeEvent) => {
        dispatch(changeRegion(event.target.value))
    }

    return (
        <footer>
            <div className='footer-container'>
                <>
                <LogoContainer imageURL='/logo/logo-primary-bg-black.png' />
                <LogoContainer imageURL='/logo/ptn.png' />
                <h3>Contact Us Now:</h3>
                    { offices.map(({region, email, address, phone}, i) => (
                        <div className="footer__contact-data" key={`office-${i}`}>
                            <p className="details-responsive"><u>{region} office:</u></p>
                            <p className="details-responsive">Email: <a className='link footer__link' href={`mailto:${email}`}>{email}</a></p>
                            <p className="details-responsive">Call: <a className='link footer__link' href={`tel:${phone}`}>{phone}</a></p>
                        </div>)
                    )}
                <div className="change-region-block">
                    {/* <FormControl>
                    <InputLabel id="change-region-label" 
                        sx={{color: "#ffffff"}}>Region:</InputLabel>
                        <Select
                        labelId="change-region-label"
                        id="change-region"
                        value={region}
                        label="Age"
                        onChange={handleChange}
                        sx={{color: "#ffffff"}}
                        >
                        <MenuItem value='africa'>Africa</MenuItem>
                        <MenuItem value='uk'>UK</MenuItem>
                        </Select>
                    </FormControl> */}
                </div>
                </>
            </div>
        </footer>
    )
}

export default Footer;