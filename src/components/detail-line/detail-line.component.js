import React from 'react';

import './detail-line.styles.scss';

function DetailLine({ type, value }) {
    return (
        <div className="detail-line">
            <span className="type">{type}: </span>
            <span className="value">{value}</span>
        </div>
    )
}

export default DetailLine;