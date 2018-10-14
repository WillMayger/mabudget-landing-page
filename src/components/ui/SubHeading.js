import React from 'react';
import PropTypes from 'prop-types';

const SubHeading = ({ children, center }) => (
  <h3 className={`sub-heading ${center ? 'center' : ''}`}>{children}</h3>
);

SubHeading.defaultProps = {
  center: false,
};

SubHeading.propTypes = {
  children: PropTypes.any.isRequired,
  center: PropTypes.bool,
};

export default SubHeading;
