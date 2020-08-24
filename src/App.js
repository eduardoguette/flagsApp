import React from "react";
import "./App.css";
import CountryList from "../src/Components/CountryList";
import Header from "./Components/Header";
import { Route, Switch } from "wouter";
/* import CountryResult from "./Components/CountryResult"; */
import { Provider } from "react-redux";
import store from "./store";
import RegionResult from "./Components/RegionResult";
import CountryDetails from "./Components/CountryDetails";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="wrapper">
        <Switch>
          <Route component={CountryList} path="/" />
          <Route component={RegionResult} path="/region/:keyword" />
          <Route component={CountryDetails} path="/details/:keyword" />
          <Route>404, Not Found!</Route>
        </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
