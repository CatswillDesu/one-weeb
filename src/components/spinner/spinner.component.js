import React from 'react';

import './spinner.styles.scss'

function Spinner({ size }) {
    return (
        <div className={`spinner-overlay ${size ? size : ''}`}>
            <div className="spinner"/>
        </div>
    )
}

export default Spinner;