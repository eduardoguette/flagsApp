import React from "react";
import "./App.css";
import CountryList from "../src/Components/CountryList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Header from "./Components/Header";
import Search from "./Components/Search";
import { Route } from "wouter";
import CountryResult from "./Components/CountryResult";


const initialStore = {
  countryList: []
}
function reducer(state, action) {
  //console.log(action)
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      // console.log("voy a actualizar la lista de paises")
      return { ...state, countryList: action.payload }
    }

    default: {
      return state
    }
  }
}

const store = createStore(reducer, initialStore)




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Search />
          <Route
            component={CountryList}
            path="/"
          />
          <Route
            component={CountryResult}
            path="/country/:keyword"
          />
        </div>
      </div>
    </Provider>
  );
}


export default App;