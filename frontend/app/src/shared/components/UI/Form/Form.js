import React from 'react';

import './Form.css';

const Form = (props) => {
  return (
    <form method={props.method} className="main-form">
      {props.children}
    </form>
  );
};

export default Form;
