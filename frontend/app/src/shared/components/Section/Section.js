import React from 'react';

const Section = (props) => {
  return (
    <section className="content-section">
      <h2 className="content-title">{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
