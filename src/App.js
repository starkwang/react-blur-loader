import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import pic from './pic.jpg';
import picSmall from './pic_small.jpg';

import BlurLoader from './react-blur-loader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlurLoader 
            src={pic}
            preview={picSmall}
            width={800}
          />
      </div>
    );
  }
}

export default App;
