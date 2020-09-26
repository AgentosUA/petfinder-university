import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

const Header: React.FC = (props: any) => {

  return (
    <React.Fragment>
      <h2>{props.title} hello world</h2>
      <input
        onChange={props.changeTitle}
        placeholder="Type something to change title"
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    title: state.root.title,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeTitle: (e: any) => dispatch({ type: 'UPDATE_TITLE', payload: e.target.value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
