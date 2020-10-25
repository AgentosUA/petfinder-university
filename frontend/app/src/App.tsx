import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './modules/Header/Header';
import Home from './modules/Home/Home';
import { Search } from './modules/Search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Search />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
