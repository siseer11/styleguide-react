import React, { Component } from "react";

import { GbCard50 } from "./components/gbCard50";
import { GbFooter } from "./components/gbFooter";
import { GbNavBar } from "./components/gbNav";
import { GbNavAside } from "./components/gbNavAside";
import { News, Widgets, Calendar, Bookmarks } from "./svgs/svgs";
import { GbSwitcher } from "./components/gbSwitcher";

class App extends Component {
  render() {
    return <GbNavAside 
    links={
      [{
        'txt' : 'news',
        'icon' : <News myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50'/>
      },
      {
        'txt' : 'widgets',
        'icon' : <Widgets myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50'/>
      },
      {
        'txt' : 'bookmarks',
        'icon' : <Bookmarks myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50'/>
      },
      {
        'txt' : 'calendar',
        'icon' : <Calendar myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50'/>
      },]
    }
    userName='Thomas Schneider'
    userImageUrl='https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6dd9dc582c677370d110940fda65b992'
  />
  }
}

export default App;

/*
<GbSwitcher myClases='gb-switcher-primary' />
<GbSwitcher myClases='gb-switcher-secondary'/>
<GbCard50
    type="full"
    background="https://images.unsplash.com/photo-1513682322455-ea8b2d81d418?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=16ea2bf757f2a2448ef8c5211a7cab4f"
    source = 'Globuzzer' postedTime='2h ago' category='Food'
  />
<GbNavAside 
    links={
      [{
        'txt' : 'news',
        'icon' : <News myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50'/>
      },
      {
        'txt' : 'widgets',
        'icon' : <Widgets myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50'/>
      },
      {
        'txt' : 'bookmarks',
        'icon' : <Bookmarks myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50'/>
      },
      {
        'txt' : 'calendar',
        'icon' : <Calendar myClases='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50'/>
      },]
    }
    userName='Thomas Schneider'
    userImageUrl='https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6dd9dc582c677370d110940fda65b992'
  />
  */
