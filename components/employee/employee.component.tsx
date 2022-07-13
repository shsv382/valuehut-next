import React from 'react';
import employeeStyles from './employee.module.scss';

import { TrainerTypes } from '../../data/content';
import SocialLinksBlock from '../social-links-block/social-links-block.component';

interface EmployeeTypes extends TrainerTypes {
    children?: any
}

const Employee: React.FC<EmployeeTypes> = ({ name, avatar, about, socialNetworks }) => {
    return (
        <section className={`${employeeStyles.employeeBlock}`}>
            <div className={`${employeeStyles.employeeAvatar}`}>
                <img alt={name} src={`images/${avatar}`} className={`${employeeStyles.employee__avatarImage}`} />
            </div>
            <article className={`${employeeStyles.employeeAbout}`}>
                <h2>{name}</h2>
                <p>{about}</p>
                {
                    socialNetworks &&
                    <SocialLinksBlock socialNetworks={socialNetworks} />
                }
            </article>
        </section>
    )
}

export default Employee;