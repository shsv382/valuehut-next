import React from 'react';
import employeeStyles from './employee.module.scss';

import { TrainerTypes } from '../../data/content';

interface EmployeeTypes extends TrainerTypes {
    children?: any
}

const Employee: React.FC<EmployeeTypes> = ({ name, avatar, about }) => {
    return (
        <section className={`${employeeStyles.employeeBlock}`}>
            <div className={`${employeeStyles.employeeAvatar}`}>
                <img src={`images/${avatar}`} className={`${employeeStyles.employee__avatarImage}`} />
            </div>
            <article className={`${employeeStyles.employeeAbout}`}>
                <h2>{name}</h2>
                <p>{about}</p>
            </article>
        </section>
    )
}

export default Employee;