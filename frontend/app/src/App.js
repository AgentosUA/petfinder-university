import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import NotFoundPage from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/:id" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
