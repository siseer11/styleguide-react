import React from "react";
import { GbCardLabel } from "./gbCardLabel";
import PropTypes from "prop-types";

export const GBCard10 = ({
  backgroundImg,
  children,
  source,
  time,
  category
}) => {
  return (
    <div className="gb-card-10-wrapper">
      <div
        className="gb-card-10"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="card-10-shadow-overlay" />
        <div className="card-10-content">
          <h1 className="gb-title-xx-large gb-text-white">{children}</h1>
        </div>
      </div>
      <GbCardLabel
        txtColor="gb-text-black"
        iconColor="gb-icon-black-opacity-30"
        source={source}
        time={time}
        category={category}
      />
    </div>
  );
};

GBCard10.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};
