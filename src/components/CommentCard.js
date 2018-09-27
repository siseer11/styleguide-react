import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../components/Avatar";
import { LikeDateLabel } from "./LikeDateLabel";

export const CommentCard = ({
  authorName,
  date,
  time,
  numHearts,
  children,
  profileImageUrl,
  profileLink
}) => {
  return (
    <div className="gb-comment-card">
      <div className="user-avatar-wrapper">
        <Avatar
          userImageUrl={profileImageUrl}
          classes="gb-avatar gb-avatar-large user-avatar"
          profileLink={profileLink}
        />
      </div>
      <div className="comment-content-wrapper">
        <div className="top-content">
          <a
            href={profileLink}
            className="author-name gb-title-tiny gb-text-black"
          >
            <b>{authorName}</b>
          </a>
          <LikeDateLabel likes={numHearts} date={date} time={time} />
        </div>
        <div className="bottom-content">
          <p className="gb-text-black gb-paragraph-small">{children}</p>
        </div>
      </div>
    </div>
  );
};

CommentCard.propTypes = {
  authorName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  numHearts: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired
};
