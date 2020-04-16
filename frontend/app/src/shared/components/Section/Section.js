import React from 'react';

const Section = (props) => {
  return (
    <section className="content-section">
      <h2 className="content-title">{props.title}</h2>
      <div className={props.flex ? 'center' : ''}>{props.children}</div>
    </section>
  );
};

export default Section;
