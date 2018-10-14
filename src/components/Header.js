import React from 'react';
import logo from './assets/MaBudgetWhiteBorder.png';
import play from './assets/getitongoogleplay.png';
import app from './assets/downloadappstore.png';

import './styles/header/header.scss';

const Header = () => (
  <header>
    <span>MaBudget</span>
    <img src={logo} alt="MaBudget" />
    <div className="get-app">
      <img src={play} alt="Download MaBudget on the play store now" title="Download MaBudget on the play store now" />
      <img src={app} alt="Download MaBudget on the app store now" title="Download MaBudget on the app store now" />
    </div>
  </header>
);

export default Header;
