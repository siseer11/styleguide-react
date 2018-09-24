import React from 'react';

export const Button = ({ link, classes, children }) => {
  return (
      <a href={link} className={classes}>{children}</a>
  );
};