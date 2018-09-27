import React from 'react';
import '../style/gb-style.css';
import PropTypes from 'prop-types';
import { Button } from './Button';

export const CardTwo = ({ category, background, followerCount, follower, buttonLink, buttonClass, buttonValue }) => {
  return (

    <div className="gb-card-two-wrapper" style={{ backgroundImage: `url(${background})` }}>
      <h2 className="gb-title-xx-large gb-text-uppercase">{category}</h2>
          <Button
            link= {buttonLink}
            classes={buttonClass}
            children={buttonValue}
          />
      <div className="gb-avatars">
        <h4 className="gb-title-tiny">{followerCount}</h4>
        <div className="gb-card-two-avatars-container">
          {
            follower.map((item, index) => (
              <img src={item.url} alt={item.alt} key={index} className="gb-avatar gb-avatar-small" />
            ))
          }
        </div>
      </div>
    </div>
  );
};

CardTwo.propTypes = {
  follower: PropTypes.arrayOf(PropTypes.array).isRequired,
  category: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
  followerCount: PropTypes.string.isRequired,
}