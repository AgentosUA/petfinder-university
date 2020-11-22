import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Home } from './modules';
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
