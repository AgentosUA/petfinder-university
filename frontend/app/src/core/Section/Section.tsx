import React, { FC } from 'react';
import { Wrapper } from '../Wrapper';
import styles from './Section.module.scss';

export type SectionProps = {
  theme?: string,
  display?: string,
  style?: string,
};

export const Section: FC<SectionProps> = (props) => {
  let theme = props.theme || 'light';

  switch (theme) {
    case 'dark':
      theme = 'dark'
      break;
    default:
      theme = 'light'
      break;
  }

  return (
    <section className={`${styles[`mode-${props.theme}`]}`}>
      <Wrapper>
        {props.children}
      </Wrapper>
    </section>

  )
};
