import React, { Suspense } from 'react';

const LazyLoadSection = (importFunc) => {
  const Component = React.lazy(importFunc);
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyLoadSection;
