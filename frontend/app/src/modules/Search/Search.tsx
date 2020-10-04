import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from '../../components';

import './Search.scss'

const Search: React.FC = () => {

  return (
    <section className="search-section">
      <Wrapper>
        <h2>Pet Finder project</h2>

      </Wrapper>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    // title: state.root.title,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // changeTitle: (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: 'UPDATE_TITLE', payload: e.target.value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
