import React, { Component } from 'react';

import Heading from './ui/Heading';
import SubHeading from './ui/SubHeading';
import Paragraph from './ui/Paragraph';

import template from './assets/templatedapp.png';
import play from './assets/getitongoogleplay.png';
import app from './assets/downloadappstore.png';
import logo from './assets/MaBudget.png';
import './styles/banner/banner.scss';

export default class Banner extends Component {
  state = {
    width: 0,
  }

  componentDidMount() {
    this.resizeEvent();
    window.addEventListener('resize', this.resizeEvent);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.resizeEvent);
  }

  resizeEvent = () => {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    const {
      width,
    } = this.state;
    return (
      <div className="banner">
        <div className="text-container">
          <Heading center={width < 1200} h1>
            MaBudget
            <img className="logo-inline" src={logo} alt="MaBudget logo" />
          </Heading>
          <Paragraph center={width < 1200}> Budget without the complexity </Paragraph>
        </div>
        <img src={template} alt="MaBudget application" className="template" />
        <SubHeading center={width < 1200}> Download on your phone now! </SubHeading>
        <div className="get-app">
          <a href="https://play.google.com/store/apps/details?id=com.WebLancer.MaBudget" target="_blank" rel="noopener noreferrer">
            <img src={play} alt="Download MaBudget on the play store now" title="Download MaBudget on the play store now" />
          </a>
          <a href="https://itunes.apple.com/us/app/mabudget/id1439368910#?platform=iphone" target="_blank" rel="noopener noreferrer">
            <img src={app} alt="Download MaBudget on the app store now" title="Download MaBudget on the app store now" />
          </a>
        </div>
        <Paragraph className="scroll-down" center={width < 1200}>Scroll down</Paragraph>
      </div>
    );
  }
}
