import React from "react";
import Random from "./Random";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./styles.css";
import AuthorPage from "./Author";

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Random />
          </Route>

          <Route path="/author/:authorName">
            <AuthorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
