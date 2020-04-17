import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './shared/components/Header/Header';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Footer from './shared/components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
