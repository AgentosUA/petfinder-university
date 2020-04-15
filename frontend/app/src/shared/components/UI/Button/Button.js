import React from 'react';

import './Button.css';

const Button = (props) => {
  let styles;
  switch (props.styles) {
    case 'main':
      styles = 'button-main';
      break;
    case 'second':
      styles = 'button-second';
      break;
    default:
      styles = props.classNames;
      break;
  }
  return <button className={styles}>{props.text}</button>;
};

export default Button;
