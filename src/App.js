import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import StartPage from "./pages/StartPage";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FactDetailPage from "./pages/FactDetailPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/fact/:id"
          render={(props) => {
            return (
              <NavBar>
                <FactDetailPage {...props} />
              </NavBar>
            );
          }}
        ></Route>
        <Route path="/">
          <NavBar>
            <StartPage />
          </NavBar>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
