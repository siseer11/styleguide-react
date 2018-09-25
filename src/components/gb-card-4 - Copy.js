import React from 'react';
import {ClockSVG} from './svgs/ClockSVG';
import {SourceSVG} from './svgs/SourceSVG';

import '../style/gb-style.css';

export const CardFour = () => {
  return (
     
      <div className='component-to-copy gb-card-four-wrapper'>
      <ul className='gb-card-four-sub-cards'>
        <li className='gb-card-four-sub-card'>
          <div className='gb-card-four-sub-card-info'>
            <h2 className='gb-title-medium'>Astronauts could land on Red Planet by 2039</h2>
            <ul className='posted-info'>
              <li className='posted-by'>
              <SourceSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                <a className='gb-text-black' href='www.globuzzer.com'>SPACE.com</a>
              </li>
              <li className='posted-at'>
                 <ClockSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                <p>Apr 5, 2015</p>
              </li>
            </ul>
          </div>
          <div className='gb-card-four-sub-card-image'>
            <img src={require('../images/story1.jpg')} alt='story-one'/>
          </div>
        </li>
        <li className='gb-card-four-sub-card'>
          <div className='gb-card-four-sub-card-info'>
            <h2 className='gb-title-medium'>Archaeologists discovered lost city in Honduran jungle</h2>
            <ul className='posted-info'>
              <li className='posted-by'>
              <SourceSVG classes= "gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                <a className='gb-text-black' href='www.globuzzer.com'>CNN</a>
              </li>
              <li className='posted-at'>
              <ClockSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                <p>Apr 3, 2015</p>
              </li>
            </ul>
          </div>
          <div className='gb-card-four-sub-card-image'>
            <img src={require('../images/story2.jpg')} alt='story-two'/>
          </div>
        </li>
        <li className='gb-card-four-sub-card'>
          <div className='gb-card-four-sub-card-info'>
            <h2 className='gb-title-medium'>The balloons that could fly tourists to the edge of space</h2>
            <ul className='posted-info'>
              <li className='posted-by'>
              <SourceSVG classes= "gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                <a className='gb-text-black' href='www.globuzzer.com'>CNN</a>
              </li>
              <li className='posted-at'>
              <ClockSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                <p>Apr 3, 2014</p>
              </li>
            </ul>
          </div>
          <div className='gb-card-four-sub-card-image'>
            <img src={require('../images/story3.jpg')} alt='story-three'/>
          </div>
        </li>
        <li className='gb-card-four-sub-card'>
          <div className='gb-card-four-sub-card-info'>
            <h2 className='gb-title-medium'>Magma expanse under Yellowstone</h2>
            <ul className='posted-info'>
              <li className='posted-by'>
              <SourceSVG classes= "gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                <a className='gb-text-black' href='www.globuzzer.com'>National Geographic</a>
              </li>
              <li className='posted-at'>
              <ClockSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                <p>Apr 1, 2014</p>
              </li>
            </ul>
          </div>
          <div className='gb-card-four-sub-card-image'>
            <img src={require('../images/story4.jpg')} alt='story-four'/>
          </div>
        </li>
      </ul>
    </div>

);
};

