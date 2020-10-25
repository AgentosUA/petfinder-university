import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from '../../components';
import { RootState } from '../../store/reducers';

import './Search.scss'

const Search: React.FC = () => {
  
  const title = useSelector((state: RootState) => state.root.title);
  // dispatch({ type: 'UPDATE_TITLE', payload: 'asdad' });
  return (
    <section className="search-section">
      <Wrapper>
        <h2 className="title">Pet Finder project: {title}</h2>

      </Wrapper>
    </section>
  );
};

export { Search };
