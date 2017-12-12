import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Channel.css';
import './Components/ChannelItemComponent.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import Channel from './Components/ChannelComponent.jsx';

class App extends Component {
  render() {
      return (
          <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>React 15.6.1</h2>
            </div>

            <Channel />
          </div>
      );
  }
}

export default App;
