import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Section } from '../../../../core';
import styles from './TabLink.module.scss';

const TabLink: React.FC = () => {
  return (
    <button className={styles.searchTitle}>Оголошення</button>
  );
};

export { TabLink };
