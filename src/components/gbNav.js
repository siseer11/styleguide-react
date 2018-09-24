import React from "react";
import { BurgerMenu, SmallLogo } from "../svgs/svgs";

export const GbNavBar = props => (
  <div className="gb-navbar gb-background-primary">
    <div className="left-content">
      <a href="#" className="gb-icon-medium gb-icon-white">
        <BurgerMenu />
      </a>
    </div>
    <div className="center-content">
      <SmallLogo myClases="gb-logo-small gb-icon-fill-white" />
    </div>
    <div className="right-content">
      {props.right &&
        props.right.map((el, idx) => (
          <a className={el.classes} key={idx}>
            {el.value}
          </a>
        ))}
    </div>
  </div>
);

