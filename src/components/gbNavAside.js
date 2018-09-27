import React from "react";
import { NavAsideLink } from "./navAsideLink";
import PropTypes from "prop-types";
import { CloseSVG } from "../svgs/CloseSVG";
import { NavAsideProfile } from "./NavAsideProfile";

/* links =[{txt: "news" , icon: (<NewsSVG classes="..." />)}] userName="..." userImageUrl="..." loggedIn=true/false */
export const GbNavAside = ({ links, userName, userImageUrl, loggedIn }) => (
  <div className="gb-nav-aside gb-gradient-red-black">
    <div className="nav-aside-image-background" />
    <div className="nav-aside-content">
      <div className="nav-aside-close gb-phone-hide">
        <CloseSVG classes="nav-aside-close-icon gb-icon-medium gb-icon-white-opacity-50" />
      </div>
      <ul className="nav-aside-content-top">
        {links.map((el, idx) => (
          <NavAsideLink icon={el.icon} key={idx}>
            {el.txt}
          </NavAsideLink>
        ))}
      </ul>
      <NavAsideProfile
        userName={userName}
        userImageUrl={userImageUrl}
        loggedIn={loggedIn}
      />
    </div>
  </div>
);

GbNavAside.propTypes = {
  userName: PropTypes.string.isRequired,
  userImageUrl: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  loggedIn: PropTypes.bool.isRequired
};
