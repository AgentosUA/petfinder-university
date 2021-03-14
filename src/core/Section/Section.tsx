import React, { FC } from 'react';
import { Wrapper } from '../Wrapper';
import styles from './Section.scss';

export type SectionProps = {
  theme?: 'light' | 'dark',
  display?: 'flex' | 'block',
  style?: string,
};

export const Section: FC<SectionProps> = ({ theme, display, style, children }) => {
  return (
    <section className={theme === 'light' ? styles.light : styles.dark}>
      <Wrapper display={display}>{children}</Wrapper>
    </section>
  )
};
