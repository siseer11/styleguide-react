import React from "react";
import PropTypes from "prop-types";

export const Button = ({ link, classes, children }) => (
  <a href={link} className={classes}>
    {children}
  </a>
);

Button.propTypes = {
  link: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired
};
