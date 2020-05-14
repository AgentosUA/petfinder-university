import React, { useState, useCallback, useEffect } from 'react';
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
import Sidebar from './shared/components/Sidebar/Sidebar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  let logoutTimer;

  const login = useCallback((token, userId, expirationDate) => {
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 3600000);
    setIsLoggedIn(true);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: userId,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setTokenExpirationDate(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    if (tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.token,
        storedData.userId,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  const showSidebarHandler = () => {
    if (showSidebar) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

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
          <Header sidebarHandler={showSidebarHandler} />
          <Sidebar show={showSidebar} onCancel={showSidebarHandler} />
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
