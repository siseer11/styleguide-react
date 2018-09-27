import React from "react";
import { LikeLabel } from "./labelComponents/LikeLabel";
import { DateLabel } from "./labelComponents/DateLabel";

export const LikeDateLabel = ({ likes, date, time, wrapperClasses }) => (
  <div className="gb-card-label comment-label">
    <DateLabel wrapperClass={wrapperClasses} date={date} time={time} />
    <LikeLabel likes={likes} wrapperClass={wrapperClasses} />
  </div>
);
