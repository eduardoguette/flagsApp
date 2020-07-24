import React from "react";
import "./App.css";
import CountryList from "../src/Components/CountryList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Header from "./Components/Header";



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
        <Header/>
        <CountryList />
      </div>
    </Provider>
  );
}


export default App;