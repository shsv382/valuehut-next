import React from 'react';
import popupMenuStyles from './popup-menu.module.scss';

interface PopupMenuTypes {
    classname?: string,
    hidden: boolean,
    children?: any
}

const PopupMenu: React.FC<PopupMenuTypes> = ({ classname, hidden, children }) => {
    return (
        <div className={`${popupMenuStyles.popupMenu} ${hidden && popupMenuStyles.popupMenuHidden} ${classname}`}>
            { children }
        </div>
    )
}

export default PopupMenu;