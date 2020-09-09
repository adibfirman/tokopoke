import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LazyHomePage } from "pages/Home";
import { LazyDetailPage } from "pages/Detail";

function App() {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <Switch>
          <Route exact path="/" component={LazyHomePage} />
          <Route path="/detail/:name" component={LazyDetailPage} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
