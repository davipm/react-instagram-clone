import React from 'react';
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from "./utils/backToTop";

import Header from './components/Header';
import Feed from './pages/Feed';
import Explore from "./pages/Explore";
import Profile from './pages/Profile';
import NotMach from "./pages/404";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FFFFFF" />
        <title>Instagram</title>
        <meta name="title" content="Instagram" />
        <meta name="description" content="Instagram app clone" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unnatural-current.surge.sh/" />
        <meta property="og:title" content="Instagram" />
        <meta property="og:description" content="Instagram app clone" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://unnatural-current.surge.sh/" />
        <meta property="twitter:title" content="Instagram" />
        <meta property="twitter:description" content="Instagram app clone" />
        <meta property="twitter:image" content="" />

        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

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

    </Router>
  );
}

export default App;
