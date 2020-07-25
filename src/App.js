import React, {Fragment} from "react";
import "./App.css";
import CountryList from "../src/Components/CountryList";
import Header from "./Components/Header";
import Search from "./Components/Search";
import { Route } from "wouter";
import CountryResult from "./Components/CountryResult";

import RegionResult from "./Components/RegionResult";



function App() {
  return (
    <Fragment >
      <div className="App">
        <Header />
      
          <Search />
          <Route
            component={CountryList}
            path="/"
          />
          <Route
            component={CountryResult}
            path="/country/:keyword"
          />
       <Route
            component={RegionResult}
            path="/region/:keyword"
          />
      </div>
    </Fragment>
  );
}


export default App;