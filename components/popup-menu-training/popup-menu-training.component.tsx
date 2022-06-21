import React from 'react';
import PopupMenu from '../popup-menu/popup-menu.component';
import PopupMenuItem from '../popup-menu-item/popup-menu-item.component';

interface PopupMenuTrainingTypes {
    isVisible: boolean,
    classname?: string
}

const PopupMenuTraining: React.FC<PopupMenuTrainingTypes> = ({ isVisible, classname }) => {
    return (
        <PopupMenu classname={ classname } hidden={!isVisible}>
            <PopupMenuItem label="Services" href="/services" />
            <PopupMenuItem label="Coaching" href="/services/coaching" />
            <PopupMenuItem label="Training" href="/services/training" />
            <PopupMenuItem label="Consulting" href="/services/consultancy" />
        </PopupMenu>
    )
}

export default PopupMenuTraining;
