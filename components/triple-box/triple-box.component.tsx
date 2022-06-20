import React from "react";
import './triple-box.module.scss';

interface TripleBoxTypes {
    children?: any
}

const TripleBox: React.FC<TripleBoxTypes> = ({ children }) => {
    return (
        <div className="triple-box">
            {children}
        </div>
    )
}

export default TripleBox;