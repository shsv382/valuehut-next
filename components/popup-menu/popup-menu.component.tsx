import React from 'react';
import './popup-menu.module.scss';

interface PopupMenuTypes {
    classname?: string,
    hidden: boolean,
    children?: any
}

const PopupMenu: React.FC<PopupMenuTypes> = ({ classname, hidden, children }) => {
    return (
        <div className={`${hidden ? "hidden" : ""} popup-menu ${classname}`}>
            { children }
        </div>
    )
}

export default PopupMenu;