import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Section extends Component {
  state = {
    opacity: 0,
    top: 100,
  }

  sectionRef = React.createRef()

  componentDidMount() {
    const {
      noanim,
    } = this.props;

    if (noanim) {
      this.setState({
        opacity: 1,
        top: 0,
      });
      return;
    }
    window.addEventListener('scroll', this.scrollEvent);
    this.scrollEvent();
  }

  componentWillUnmount() {
    const {
      noanim,
    } = this.props;

    if (noanim) {
      this.setState({
        opacity: 1,
        top: 0,
      });
      return;
    }
    window.removeEventListener('scroll', this.scrollEvent);
  }

  scrollEvent = () => {
    const bounding = this.sectionRef.current.getBoundingClientRect();
    if (
      bounding.top <= (window.innerHeight || document.documentElement.clientHeight) - 150
    ) {
      this.setState({
        opacity: 1,
        top: 0,
      });
    }
  }

  render() {
    const {
      children,
    } = this.props;

    const {
      opacity,
      top,
    } = this.state;

    return (
      <div ref={this.sectionRef} className="section" style={{ opacity, top, marginBottom: top }}>
        {children}
      </div>
    );
  }
}

Section.defaultProps = {
  noanim: false,
};

Section.propTypes = {
  children: PropTypes.any.isRequired,
  noanim: PropTypes.bool,
};