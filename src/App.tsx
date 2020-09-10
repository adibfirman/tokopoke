import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { LazyHomePage } from "pages/Home";
import { LazyDetailPage } from "pages/Detail";
import { LazyMyListPage } from "pages/MyList";

function App() {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <Switch>
          <Route exact path="/" component={LazyHomePage} />
          <Route path="/my-list" component={LazyMyListPage} />
          <Route path="/detail/:name" component={LazyDetailPage} />
          <Route path="/detail">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
