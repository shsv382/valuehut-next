import React from 'react';

import { useAppSelector } from '../../redux/hooks';

import PopupMenu from '../popup-menu/popup-menu.component';
import PopupMenuItem from '../popup-menu-item/popup-menu-item.component';

interface PopupMenuTrainingTypes {
    classname?: string
}

const PopupMenuTraining: React.FC<PopupMenuTrainingTypes> = ({ classname }) => {
    const showPopupMenuTraining = useAppSelector(state => state.app.showPopupMenuTraining)
    return (
        <PopupMenu classname={ classname } hidden={showPopupMenuTraining}>
            <PopupMenuItem label="Services" href="/services" />
            <PopupMenuItem label="Coaching" href="/services/coaching" />
            <PopupMenuItem label="Training" href="/services/training" />
            <PopupMenuItem label="Consulting" href="/services/consultancy" />
        </PopupMenu>
    )
}

export default PopupMenuTraining;
