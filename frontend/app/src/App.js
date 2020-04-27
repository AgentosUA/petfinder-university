import React, { useState, useCallback } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './shared/components/Header/Header';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Footer from './shared/components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import AddAdvert from './pages/addAdvert/AddAdvert';
import Profile from './pages/Profile/Profile';
import About from './pages/About/About';

import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback((token, userId) => {
    setIsLoggedIn(true);
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/adverts/new" component={AddAdvert} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/search" component={Search} />

            {routes}
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
