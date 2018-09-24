import React from 'react';
import {ClockSVG} from './svgs/ClockSVG';
import {SourceSVG} from './svgs/SourceSVG';

export const GBCard11 = ({ backgroundImg, title, source, time, category }) => {
    return (
        <div className='component-to-copy gb-card-11' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className='card-11-content'>
                <h1 className='card-title gb-title-large gb-text-white'>{title}</h1>
                <div className="gb-card-label">
                    <div className="card-label-item">
                        <SourceSVG classes="gb-label-icon gb-icon-white-opacity-50 gb-icon-small"/>
                        <a href='#' className="gb-text-white gb-label">{source}</a>
                    </div>
                    <div className="card-label-item">
                        <ClockSVG classes="gb-label-icon gb-icon-white-opacity-50 gb-icon-small"/>
                        <p className="gb-text-white gb-label">{time}</p>
                    </div>
                    <div className="card-label-item gb-grow-one">
                        <a href="#" className="gb-underline gb-text-white gb-label ">{category}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};