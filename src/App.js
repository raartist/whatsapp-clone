import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
          <Switch>
            <Sidebar />
            <Route path="/rooms/:roomId">

              <Chat />
            </Route>
            <Route path="/">
              {<h1>Im home</h1>}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div >
  );
}

export default App;
