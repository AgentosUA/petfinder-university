import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Section } from '../../../../core';
import styles from './Posts.module.scss';

const Posts: React.FC = () => {
  return (
    <Section display='block'>
      <h1 className={styles.searchTitle}>Оголошення</h1>
    </Section>
  );
};

export { Posts };
