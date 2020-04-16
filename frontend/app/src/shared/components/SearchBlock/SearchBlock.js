import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import { NavLink } from 'react-router-dom';

import SearchForm from './SearchForm';

import './SearchBlock.css';
import Button from '../UI/Button/Button';

const SearchBlock = () => {
  return (
    <header className="header__search">
      <Wrapper>
        <NavLink to="/">
          <h1 className="header__search__title">
            <span className="orange">Pet </span>Finder
          </h1>
          <h3 className="header__search__subtitle">База ваших улюбленців!</h3>
        </NavLink>
        <SearchForm />
        <div className="header__search_call-to-action">
          <Button text="Створити оголошення" styles="main" />
          <Button text="Придбати нашийник" styles="main" />
        </div>
      </Wrapper>
    </header>
  );
};

export default SearchBlock;
