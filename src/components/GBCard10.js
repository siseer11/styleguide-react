import React from 'react';
import PropTypes from 'prop-types';
import {ClockSVG} from './svgs/ClockSVG';
import {SourceSVG} from './svgs/SourceSVG';

export const GBCard10 = ({ backgroundImg, title, source, time, category }) => {
    return (
        <div className='gb-card-10-wrapper'>
            <div className='gb-card-10' style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className='card-10-shadow-overlay'/>
                <div className='card-10-content'>
                    <h1 className='gb-title-xx-large gb-text-white'>{title}</h1>
                </div>
            </div>

            <div className="gb-card-label">
                <div className="card-label-item">
                    <SourceSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                    <a href='#' className="gb-text-black gb-label">{source}</a>
                </div>
                <div className="card-label-item">
                    <ClockSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                    <p className="gb-text-black gb-label">{time}</p>
                </div>
                <div className="card-label-item gb-grow-one">
                    <a href="#" className="gb-underline gb-text-black gb-label ">{category}</a>
                </div>
            </div>
        </div>
    );
};


GBCard10.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
};