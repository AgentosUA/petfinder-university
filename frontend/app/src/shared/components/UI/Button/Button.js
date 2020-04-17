import React from 'react';

import './Button.css';

const Button = (props) => {
  let sumbit = () => {
    return '';
  };
  if (props.submit) {
    sumbit = props.submit;
  }
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
  return props.type === 'submit' ? (
    <button type={props.type} className={styles} onClick={sumbit}>
      {props.text}
    </button>
  ) : (
    <button type={props.type} className={styles}>
      {props.text}
    </button>
  );
};

export default Button;
