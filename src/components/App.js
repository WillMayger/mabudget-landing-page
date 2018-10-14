import React, { Component } from 'react';

import Banner from './Banner';
import Header from './Header';
import ContentBody from './ContentBody';

import './styles/global/global.scss';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Banner />
        <Header />
        <ContentBody />
      </div>
    );
  }
}

export default App;
