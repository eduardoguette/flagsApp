import React, { Fragment } from "react";
import "./App.css";
import CountryList from "../src/Components/CountryList";
import Header from "./Components/Header";
import { Route } from "wouter";
import CountryResult from "./Components/CountryResult";

import RegionResult from "./Components/RegionResult";
import CountryDetails from "./Components/CountryDetails";




function App() {

  return (
    <Fragment >
      <div className="App">
        <Header />
        <Route
          component={CountryList}
          path="/"
        />
        <Route
          component={CountryResult}
          path="/search/:keyword"
        />
        <Route
          component={RegionResult}
          path="/region/:keyword"
        />
        <Route
          component={CountryDetails}
          path="/details/:keyword"
        />
      </div>
    </Fragment>
  );
}


export default App;