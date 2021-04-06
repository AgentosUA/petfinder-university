import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Section } from '../../core';
import { Pets, Posts } from './pages';
import styles from './Profile.module.scss';

const Profile: React.FC = () => {
  return (
    <React.Fragment>
      <Route path='/profile/user' exact component={Posts} />
      <Route path='/profile/posts' exact component={Posts} />
      <Route path='/profile/pets' exact component={Pets} />
    </React.Fragment>
  );
};

export { Profile };
