import React from 'react';
import { connect } from 'react-redux';

const Home: React.FC = (props: any) => {

  return (
    <React.Fragment>
      <h2>Body</h2>
    </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
