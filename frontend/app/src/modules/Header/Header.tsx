import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, Logo, Navigation, AuthNav } from '../../components';
import './Header.scss';

const Header: React.FC = () => {

  return (
    <React.Fragment>
      <header className="header">
        <Wrapper>
          <Logo />
          <Navigation />
          <AuthNav />
        </Wrapper>
      </header>
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
    changeTitle: (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: 'UPDATE_TITLE', payload: e.target.value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
