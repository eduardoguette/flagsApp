import { createStore } from "redux";
import getFlags from "./Components/getFlags";

const initialState = {
  banderas: getFlags(),
  bandera: [],
};
// action es un objeto
const reducerUsuarios = (state = initialState, action) => {
  if(action.type === "NUEVA_BUSQUEDA"){
    return {
      ...state,
      bandera: action.busqueda
    }
  }
  return state;
};

export default createStore(reducerUsuarios);
