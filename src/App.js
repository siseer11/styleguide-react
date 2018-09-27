import React, { Component } from "react";
import {GBCard11} from './components/GBCard11';
class App extends Component {
  render() {
    return (
      <GBCard11 
        backgroundImg='https://images.unsplash.com/photo-1512526691671-09298912003f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a57aaf2c9637f6df2de67fcd2c430e4d'
        source='Globuzzer'
        time='10d ago'
        category='Travel'
      >A lonenly man in a forest, tard...</GBCard11>
    );
  }
}

export default App;
