import React from 'react';
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Instagram</title>
        <meta name="title" content="Instagram" />
        <meta name="description" content="Web site created using create-react-app" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unnatural-current.surge.sh/" />
        <meta property="og:title" content="Instagram" />
        <meta property="og:description" content="Web site created using create-react-app" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://unnatural-current.surge.sh/" />
        <meta property="twitter:title" content="Instagram" />
        <meta property="twitter:description" content="Web site created using create-react-app" />
        <meta property="twitter:image" content="" />
      </Helmet>

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
