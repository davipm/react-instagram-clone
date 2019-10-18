import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Feed from './Pages/Feed';
import Explore from "./Pages/Explore";
import NotMach from "./Pages/404";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="*">
          <NotMach />
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
