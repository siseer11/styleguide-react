import React from "react";
import { PropTypes } from "prop-types";

export const LinkLists = ({ links, txtClasses, liClasses }) => (
  <React.Fragment>
    {links.map((el, idx) => (
      <li className={liClasses}>
        <a key={idx} className={txtClasses} href={el.link}>
          {el.txt ? el.txt : el.icon}
        </a>
      </li>
    ))}
  </React.Fragment>
);

LinkLists.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  liClasses: PropTypes.string,
  txtClasses: PropTypes.string
};
