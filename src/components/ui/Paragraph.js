import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, center, className }) => (
  <p className={`paragraph ${className} ${center ? 'center' : ''}`}>{children}</p>
);

Paragraph.defaultProps = {
  center: false,
  className: '',
};

Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
  center: PropTypes.bool,
  className: PropTypes.string,
};

export default Paragraph;
