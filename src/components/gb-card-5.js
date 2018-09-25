import React from 'react';
import PropTypes from 'prop-types';
import {BookmarkSVG} from './svgs/BookmarkSVG';

import '../style/gb-style.css';

  const CardfiveList = ({ title, time, topic, url }) => {

    return (
  
      <li className="gb-card-five-card">
      <div className="gb-card-five-card-icon">
        <BookmarkSVG classes="gb-card-five-card-bookmark-icon"/>
      </div>
      <div className="gb-card-five-card-content">
        <div className="gb-card-five-card-title-time">
          <h3 className="gb-title-tiny gb-text-red gb-text-capitalize">{title}</h3>
          <p className="gb-subtitle-small gb-text-dark-blue">{time}</p>
        </div>
        <div className="article-title">
          <h4 className="gb-title-medium">{topic}</h4>
        </div>
      </div>
      <div className="gb-card-five-wrapper-article-image">
        <img src={url} alt="article"/>
      </div>
    </li>
  
      );
  
  }


export const CardFive = ({ data }) => {
  return (
     
      <div className="gb-card-five-wrapper">
    <ul className="gb-card-five-cards">
    {
         data.map((cardlist) => (
        <CardfiveList 
        title= {cardlist.title}
        time= {cardlist.time}
        topic= {cardlist.topic}
        url= {cardlist.url}
        />
       ) )
         }
    </ul>
  </div>

);
};

CardFive.propTypes = {
  data : PropTypes.arrayOf(PropTypes.array).isRequired
}

