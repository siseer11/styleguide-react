import React from "react";
import { PropTypes } from "prop-types";
import {Avatar} from '../components/Avatar';
import { LargeLogoSVG } from "../svgs/LargeLogoSVG";

export const NavAsideProfile = ({ userName, userImageUrl, loggedIn }) => (
  <div className="nav-aside-content-bottom line-top">
    {loggedIn ? (
      <React.Fragment>
        <div className="content-left">
          <a
            className="left-link gb-text-uppercase gb-text-white gb-title-tiny"
            href="#"
          >
            <b>LOG OUT</b>
          </a>
          <a href="#" className="left-link gb-label gb-text-white-opacity-50">
            {userName}
          </a>
        </div>
        <div className="content-right">
          <Avatar 
            userImageUrl={userImageUrl} 
            classes='gb-avatar-medium'
          />
        </div>
      </React.Fragment>
    ) : (
      <LargeLogoSVG classes="gb-icon-fill-white" />
    )}
  </div>
);

NavAsideProfile.propTypes = {
  userName: PropTypes.string,
	userImageUrl: PropTypes.string,
	loggedIn : PropTypes.bool.isRequired,
};
