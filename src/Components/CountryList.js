import React, { useState } from "react";
import styled from "styled-components";
import getFlags from './getFlags'
import Country from "./Country.js";
import Search from "./Search.js";

/* import { useSelector, useDispatch } from "react-redux"; */




const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--VeryLightGray);
  margin-top: 7em;

  @media screen and (min-width: 720px){

    margin-right: 0;
    margin-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2em;
}
@media screen and (min-width: 940px){

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
  
}
@media screen and (min-width: 1024px){

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
`;



function CountryList() {
  const [flags, setFlags] = useState([]);
  const [statusflags, setStatusFlags] = useState(false);

  if (statusflags === false) {
    getFlags()
      .then(flags => {
        setStatusFlags(true)
        setFlags(flags)
      })

  }

  return (
    <>
    <Search />
    <CountryListStyled>
      {
        flags.map(({ name, region, population, capital, flag, numericCode }) => {
          return (
            <Country
              key={numericCode}
              flag={flag}
              population={population}
              region={region}
              name={name}
              capital={capital}
            />
          )
        })
      }
    </CountryListStyled>
    </>
  )
}

export default CountryList



//function ContryList() {
//  const dispatch = useDispatch()
//  const countryList = useSelector((state) => //state.countryList)
// // console.log(countryList)
//  // const [countryList, setCountryList] = //useState([]);
//  useEffect(() => {
//    fetch("https://restcountries.eu/rest/v2///all")
//      .then((resp) => resp.json())
//      .then((list) => {
//        dispatch({
//          type: "SET_COUNTRY_LIST",
//          payload: list
//        })
//        //  setCountryList(data);
//     //   console.log(list.length);
//      })
//      .catch((err) => console.log(err));
//  }, [dispatch]);
//
//  return (
//    <CountryListStyled>
//      {
//        countryList.map(({ name, region, //population, capital, flag, numericCode }//) => {
//          return (
//            <Country
//              key={numericCode}
//              flag={flag}
//              population={population}
//              region={region}
//              name={name}
//              capital={capital}
//            />
//          )
//        })}
//    </CountryListStyled>
//  );
//}
//export default ContryList;
//
//