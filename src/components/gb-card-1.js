import React from 'react';
import PropTypes from 'prop-types';

import '../style/gb-style.css';
const CardOneLi = ({ follower, category, background }) => {

	return (

    <li className="gb-card-one-image" style={{ backgroundImage: `url(${background})` }}>
    <div className="gb-card-one-info">
      <p className="gb-phone-title-tiny gb-title-large">{category}</p>
      <div className="gb-card-one-btn-wrapper">
        <input className="gb-btn gb-btn-small gb-btn-white" value="following" type="button" /> </div>

    </div>

    <div className="gb-card-one-avatars-wrapper">
      <div className="gb-title-small">
        <p> followers</p>
      </div>
      <div className="gb-card-one-follower-avatar">
        <div className="gb-card-one-avatars-container">
              {
                follower.map((item)=>(
					  	<img  src={item.url} alt={item.alt} className="gb-avatar gb-avatar-small"/>
				        	))
			      	}  
        </div>
      </div>
    </div>
  </li>
		);
}

export const CardOne = ({ card }) => {

  
  return (
   <div className="gb-card-one-wrapper">
      <ul className="gb-card-one">
       {
         card.map((cardlist) => (
        <CardOneLi 
        follower= {cardlist.follower}
        category= {cardlist.category}
        background= {cardlist.background}
        />
       ) )
         }
      </ul>
    </div>

);
};

CardOneLi.propTypes = {
  follower : PropTypes.arrayOf(PropTypes.array).isRequired
}

CardOne.propTypes = {
  card : PropTypes.arrayOf(PropTypes.array).isRequired
}

