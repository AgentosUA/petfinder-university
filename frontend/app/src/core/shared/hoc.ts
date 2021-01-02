import React from 'react';

const hoc = (props, component) => {
  return <component ...props />;
}

export { hoc };