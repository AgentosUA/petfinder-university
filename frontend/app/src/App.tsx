import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './modules/header/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
