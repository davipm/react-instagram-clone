import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer/Footer";
import Feed from './Pages/Feed';
import Explore from "./Pages/Explore";
import Profile from './Pages/Profile';
import NotMach from "./Pages/404";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/explore/">
          <Explore />
        </Route>
        <Route path="/profile/">
          <Profile />
        </Route>
        <Route path="*">
          <NotMach />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
