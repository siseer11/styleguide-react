import React from 'react';
import '../style/gb-style.css';
import PropTypes from 'prop-types';

export const GbAvatarListHorizontal = ({ avatar, classes }) => {
  return (

    
        
            avatar.map((image, index) => (
              <img src={image.url} alt={image.alt} key={index} className={classes} />
            ))
         
      
  );
};

GbAvatarListHorizontal.propTypes = {
  avatar: PropTypes.arrayOf(PropTypes.array).isRequired,
  classes: PropTypes.string.isRequired,
}