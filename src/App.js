import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Route
          render={({ location }) => {
            return (
              <Switch location={location}>
                <Route exact path='/' component={HomePage} />
              </Switch>
            );
          }}
        />
      </div>
    </BrowserRouter>
  );
}


export default App;
