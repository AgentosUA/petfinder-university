import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, NotFound, Login, Logout } from './modules';
import { Header, Search } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Search />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
