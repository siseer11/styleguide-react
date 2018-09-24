import React from 'react';

export const SourceSVG = ({ classes }) => {
    return (
        <svg
            id="source"
            viewBox="0 0 50 50"
            width="100%"
            height="100%"
            className={classes}
        >
            <title>source</title>
            <g>
                <path d="M0 20C5.33333 14.4772 5.33333 5.52285 0 0" transform="translate(16 15)" strokeWidth="2" stroke-linecap="round"></path>
                <path d="M0 30C8 21.7157 8 8.28427 0 0" transform="translate(30 10)" strokeWidth="2" stroke-linecap="round"></path>
            </g>
        </svg>
    );
};