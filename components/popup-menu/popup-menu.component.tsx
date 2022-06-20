import React from 'react';
import './popup-menu.module.scss';

import { useAppDispatch } from '../../redux/hooks';
import { showPopupMenuTraining } from '../../redux/app/app.actions';

interface PopupMenuTypes {
    classname?: string,
    hidden: boolean,
    children?: any
}

const PopupMenu: React.FC<PopupMenuTypes> = ({ classname, hidden, children }) => {
    const dispatch = useAppDispatch();
    return (
        <div className={`${hidden ? "hidden" : ""} popup-menu ${classname}`} onClick={()=>dispatch(showPopupMenuTraining())}>
            { children }
        </div>
    )
}

export default PopupMenu;