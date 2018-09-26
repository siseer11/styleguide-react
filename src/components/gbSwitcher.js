import React from 'react';
import PropTypes from 'prop-types';

export const GbSwitcher = ({myClases}) => (
    <label className={`gb-switcher ${myClases}`}>
        <input className="gb-swithcer-checkbox" type="checkbox" />
        <div className="gb-switcher-slider"></div>
    </label>
)

GbSwitcher.propTypes = {
    myClases : PropTypes.string.isRequired
}