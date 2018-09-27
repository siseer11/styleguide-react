import React from "react";
import { PropTypes } from "prop-types";
import { BurgerMenuSVG } from "../svgs/BurgerMenuSVG";
import { SmallLogoSVG } from "../svgs/SmallLogoSVG";
import { Avatar } from "../components/Avatar";
import { LinkLists } from "../components/LinkLists";

/* rightLinks = [{txt : 'home' , link : '#'}] loggedIn={true/false} userImageUrl='link' profileLink='#'*/
export const GbNavBar = ({
  righLinks,
  loggedIn,
  userImageUrl,
  profileLink
}) => (
  <div className="gb-navbar gb-background-primary">
    <div className="left-content">
      <a href="#" className="gb-icon-medium gb-icon-white">
        <BurgerMenuSVG />
      </a>
    </div>
    <div className="center-content">
      <SmallLogoSVG classes="gb-icon-medium gb-icon-fill-white" />
    </div>
    <ul className="right-content">
      {loggedIn ? (
        <React.Fragment>
          <LinkLists
            links={righLinks}
            txtClasses="gb-text-white gb-paragraph-medium gb-tablet-hide"
          />
          <Avatar
            userImageUrl={userImageUrl}
            classes="gb-avatar-small"
            profileLink={profileLink}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <LinkLists
            links={[
              {
                txt: "Sign-in",
                href: "#"
              },
              {
                txt: "Sign-up",
                href: "#"
              }
            ]}
            txtClasses="gb-text-white gb-paragraph-medium"
          />
        </React.Fragment>
      )}
    </ul>
  </div>
);

GbNavBar.propTypes = {
  righLinks: PropTypes.arrayOf(PropTypes.object),
  loggedIn: PropTypes.bool.isRequired,
  userImageUrl: PropTypes.string,
  profileLink: PropTypes.string
};
