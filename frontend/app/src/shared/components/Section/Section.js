import React from 'react';

import './Section.css';

const Section = (props) => {
  const flex = props.flex ? 'center' : '';
  const styles = flex + (props.styles || '');
  return (
    <section className="content-section">
      <h2 className="content-title">{props.title}</h2>
      {props.subtitle ? <p className="content-subtitle">{props.subtitle}</p> : ''}
      <div className={styles}>{props.children}</div>
    </section>
  );
};

export default Section;
