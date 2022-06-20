import React from 'react';
import './employee.module.scss';

import { TrainerTypes } from '../../data/content';

interface EmployeeTypes extends TrainerTypes {
    children?: any
}

const Employee: React.FC<EmployeeTypes> = ({ name, avatar, about }) => {
    return (
        <section className="employee-block">
            <div className="employee-avatar">
                <img src={`images/${avatar}`} className="employee__avatar-image" />
            </div>
            <article className="employee-about">
                <h2>{name}</h2>
                <p>{about}</p>
            </article>
        </section>
    )
}

export default Employee;