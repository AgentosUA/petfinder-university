import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, NotFound, Login, Logout, Search as SearchPage, Profile } from './modules';
import { Header, Search } from './components';

import './App.scss';

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Search />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Logout} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
