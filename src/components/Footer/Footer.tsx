import React from 'react';
import { Logo, Wrapper } from '../../core';
import styles from './Footer.scss';

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.info}>
          <Logo>Pet Finder</Logo>
        </div>
      </Wrapper>
    </footer>
  );
};


export { Footer };
