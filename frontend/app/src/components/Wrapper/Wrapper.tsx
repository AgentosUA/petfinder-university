import React from 'react';
import './Wrapper.scss';

export const Wrapper: React.FC = (props: any) => {

  return (<div className="wrapper">{props.children}</div>);
};
