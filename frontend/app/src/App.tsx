import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './modules/Header/Header';
import Home from './modules/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
