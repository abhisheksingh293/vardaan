import React from 'react';

const LazyImage = ({ src, alt, ...props }) => (
  <img loading="lazy" src={src} alt={alt} {...props} />
);

export default LazyImage;
