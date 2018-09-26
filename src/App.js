import React, { Component } from "react";
import { GbNavAside } from "./components/gbNavAside";
import { News } from './svgs/NewsSVG';
import { Widgets } from './svgs/WidgetsSVG';
import { Bookmarks } from './svgs/BookMarksSVG';
import { Calendar } from './svgs/CalendarSVG';

class App extends Component {
  render() {
    return <GbNavAside
      links={
        [{
          'txt': 'news',
          'icon': <News myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },
        {
          'txt': 'widgets',
          'icon': <Widgets myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },
        {
          'txt': 'bookmarks',
          'icon': <Bookmarks myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },
        {
          'txt': 'calendar',
          'icon': <Calendar myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },]
      }
      userName='Thomas Schneider'
      userImageUrl='https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6dd9dc582c677370d110940fda65b992'
    />
  }
}

export default App;


