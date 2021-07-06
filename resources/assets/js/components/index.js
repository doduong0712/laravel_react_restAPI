import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";

function App() {
  return (
    <Router className="App__container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add">
          <AddUser />
        </Route>
        <Route path="/edit/:id">
          <EditUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
