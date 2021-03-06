import React from "react";
import tripleBoxStyles from './triple-box.module.scss';

interface TripleBoxTypes {
    children?: any
}

const TripleBox: React.FC<TripleBoxTypes> = ({ children }) => {
    return (
        <div className={`${tripleBoxStyles.tripleBox}`}>
            {children}
        </div>
    )
}

export default TripleBox;