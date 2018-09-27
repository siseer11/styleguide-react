import React, { Component } from "react";
import {GBCard11} from './components/GBCard11';
import { GbNavAside } from "./components/gbNavAside";
import { NewsSVG } from './svgs/NewsSVG';
import { WidgetsSVG } from './svgs/WidgetsSVG';
import { BookMarksSVG } from './svgs/BookMarksSVG';
import { CalendarSVG } from './svgs/CalendarSVG';
import { EmailSVG } from './svgs/EmailSVG';
import { NameSVG } from './svgs/NameSVG';
import {CardOne} from './components/gb-card-1';
import {CardTwo} from './components/gb-card-2';
import {CardFour} from './components/gb-card-4';
import {CardFive} from './components/gb-card-5';
import {GbInputs} from './components/gbInputs';
import {GbAvatarListHorizontal} from './components/gbAvatarListHorizontal';
import './style/gb-style.css';


class App extends Component {
  render() {
    return (
        <div>
             <GBCard11
             backgroundImg='https://images.unsplash.com/photo-1526924286897-37e06ab5ac13?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=e92851db78f744fbd211bace07046f63' 
             title='Astronauts could land on Red Planet by 2039' 
             source='Globuzzer' 
             time ='10h ago'
             category = 'Nature'/>

             <CardOne
             card= {
               [{
                 category: "Science",
                 buttonLink: "www.globuzzer.com",
                 buttonValue: "following",
                 buttonClass: "gb-btn gb-btn-small gb-btn-white",

             background: "https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=981026b7c3ee99d54e0811e984995340",
             follower:
               [{
                   url: "http://fakeimg.pl/200/?text=img1",
                 'alt' : 'follower1',
               },
               {
                   url: "http://fakeimg.pl/200/?text=img1",
                 'alt' : 'follower2',
               },
               {
                   url: "http://fakeimg.pl/200/?text=img1",
                 'alt' :  'follower3',
               },
               {
                   url: "http://fakeimg.pl/200/?text=img1",
                 'alt' : 'follower4',
               }]
             
               },

               {
                 category: "Technology",
                 buttonLink: "www.globuzzer1.com",
                 buttonValue: "follow",
                 buttonClass: "gb-btn gb-btn-small gb-btn-white",
             background: "https://picsum.photos/1800/800?image=0",
             follower:
               [{
                   url: "http://fakeimg.pl/200/?text=img1",
                 'alt' : 'follower1',
               },
               {
                   url: "http://fakeimg.pl/200/?text=img2",
                 'alt' : 'follower2',
               },
               {
                   url: "http://fakeimg.pl/200/?text=img3",
                 'alt' :  'follower3',
               },
               {
                   url: "http://fakeimg.pl/200/?text=img4",
                 'alt' : 'follower4',
               }]
             
               }

               ]
             }/>
             <h1>List of followers/avatar</h1>
             < GbAvatarListHorizontal
             classes= 'gb-avatar gb-avatar-small'
             avatar={
              [{
                  url: "http://fakeimg.pl/200/?text=img1",
                'alt' : 'follower1'
              },
              {
                  url: "http://fakeimg.pl/200/?text=img2",
                'alt' : 'follower2'
              },
              {
                  url: "http://fakeimg.pl/200/?text=img3",
                'alt' :  'follower3'
              },
              {
                  url: "http://fakeimg.pl/200/?text=img4",
                'alt' : 'follower4'
              } ]} />
              <h1>Card Two</h1>
              <CardTwo
            category="Science"
            followerCount="234k Followers"
            buttonLink= "www.globuzzer.com"
            buttonValue= "following"
            buttonClass= "gb-btn gb-btn-small gb-btn-white"
            background="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=981026b7c3ee99d54e0811e984995340"
            follower={
              [{
                  url: "http://fakeimg.pl/200/?text=img1",
                'alt' : 'follower1'
              },
              {
                  url: "http://fakeimg.pl/200/?text=img2",
                'alt' : 'follower2'
              },
              {
                  url: "http://fakeimg.pl/200/?text=img3",
                'alt' :  'follower3'
              },
              {
                  url: "http://fakeimg.pl/200/?text=img4",
                'alt' : 'follower4'
              },]
            }
            />
            <CardFour
           data= {
            [{
              heading: "Astronauts could land on Red Planet by 2039",
              source: "SPACE.com",
              date: "Apr 5, 2015",
              image: "http://fakeimg.pl/200/?text=img1",
            },

            {
              heading: "The balloons that could fly tourists to the edge of space",
              source: "CNN",
              date: "Apr 3, 2014",
              image: "http://fakeimg.pl/200/?text=img2",
            },
            {
              heading: "Archaeologists discovered lost city in Honduran jungle",
              source: "BBC",
              date: "Dec 3, 2015",
              image: "http://fakeimg.pl/200/?text=img3",
            },
            {
              heading: "Magma expanse under Yellowstone",
              source: "National Geographic",
              date: "Feb 1, 2016",
              image: "http://fakeimg.pl/200/?text=img1",
            },
          ]   }
          />
          <CardFive
           data= {
            [{
              title: "bookmark",
              time: "19:00 AM",
              topic: "NASA goes to Mars: Astronauts could land on Red Planet by 2039",
              url: "http://fakeimg.pl/200/?text=img1",
            },

            {
              title: "Source",
              time: "15:00 PM",
              topic: "Topic of second card",
              url: "http://fakeimg.pl/200/?text=img2",
            }
          ]}/>

          <h1>Inputs</h1>

           <form className="gb-form-350 gb-background-primary" >
          <GbInputs
            labelFor= 'email'
            SVG= {<EmailSVG classes='gb-input-icon-left'/>}
            
            inputClass='gb-input-primary gb-input-background-transparent'
            inputType= 'email'
            inputPlaceholder='Email' />

              <GbInputs
            labelFor= 'name'
            SVG= {<NameSVG classes='gb-input-icon-left'/>}
            
            inputClass='gb-input-primary gb-input-background-transparent'
            inputType= 'text'
            inputPlaceholder='Name' />

           </form>
         


         </div>
         );
  }
}

export default App;


/*
<GbNavAside
      links={
        [{
          'txt': 'news',
          'icon': <NewsSVG classes='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },
        {
          'txt': 'widgets',
          'icon': <WidgetsSVG classes='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },
        {
          'txt': 'bookmarks',
          'icon': <BookMarksSVG classes='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },
        {
          'txt': 'calendar',
          'icon': <CalendarSVG classes='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },]
      }
      userName='Thomas Schneider'
      userImageUrl='https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6dd9dc582c677370d110940fda65b992'
    />
    */