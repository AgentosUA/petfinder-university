import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Section } from '../../../../core';
import styles from './Pets.module.scss';

const Pets: React.FC = () => {
  return (
    <Section display='block'>
      <h1 className={styles.searchTitle}>Улюбленці</h1>

    </Section>
  );
};

export { Pets };
