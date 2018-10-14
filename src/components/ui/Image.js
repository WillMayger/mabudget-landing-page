import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt }) => (
  <img src={src} className="main-img" alt={alt} />
);

Image.propTypes = {
  example: PropTypes.any.isRequired,
};

export default Image;
