import React from 'react';

import './Section.css';

const Section = (props) => {
  return (
    <section className="content-section">
      <h2 className="content-title">{props.title}</h2>
      {props.subtitle ? <p className="content-subtitle">{props.subtitle}</p> : ''}
      <div className={props.flex ? 'center' : ''}>{props.children}</div>
    </section>
  );
};

export default Section;
