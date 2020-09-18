import React from "react";
import Random from "./Random";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Random />
          </Route>

          <Route path="/1">
            <div>Heytayo</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
