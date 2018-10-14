import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children, center, h1 }) =>
  (h1 ? (
    <h1 className={`heading ${center ? 'center' : ''}`}>{children}</h1>
  ) : (
    <h2 className={`heading ${center ? 'center' : ''}`}>{children}</h2>
  ));


Heading.defaultProps = {
  center: false,
  h1: false,
};

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  center: PropTypes.bool,
  h1: PropTypes.bool,
};
export default Heading;
