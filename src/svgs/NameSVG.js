import React from "react";

export const NameSVG = ({ classes }) => {
  return (
    <svg
      className={classes}
      id="name"
      viewBox="0 0 50 50"
      width="100%"
      height="100%"
    >
      <title>name</title>
      <g>
      <path d="M0 1H38" transform="translate(6 31)" stroke-width="2" stroke-linecap="square"/>
      <path d="M0 1H26" transform="translate(6 18)" stroke-width="2" stroke-linecap="square"/>
      </g>
    </svg>
  );
};