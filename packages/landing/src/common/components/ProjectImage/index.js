import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base, themed } from '../base';

const ImageWrapper = styled('img')(
  {
    display: 'block',
    maxWidth: '100%',
    height: '100px',
  },
  base,
  themed('Image')
);

const ProjectImage = ({ src, alt, ...props }) => (
  <ImageWrapper src={src} alt={alt} {...props} />
);

export default ProjectImage;

ProjectImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

ProjectImage.defaultProps = {
  m: 0,
};
