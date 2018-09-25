import React from 'react';
import ReactDOM from 'react-dom';

import {CardOne} from './components/gb-card-1';
import {CardTwo} from './components/gb-card-2';
import {CardFour} from './components/gb-card-4';
import {CardFive} from './components/gb-card-5';


class App extends React.Component {

render() {
   return (
       <div>
          <div>
              <CardOne
              card= {
                [{
                  category: "Science",
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
              background: "https://picsum.photos/1800/800?image=0",
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
              
                }

                ]
              }  
              
              />
          </div>
          <div><CardTwo
            category="Science"
            followerCount="234k Followers"
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
            /></div>
          <div><CardFour
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
          </div>
          <div><CardFive
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
          ]
          
        }


           /></div>
      </div>
   );

}
}


ReactDOM.render(<App/>, document.getElementById('root'));
