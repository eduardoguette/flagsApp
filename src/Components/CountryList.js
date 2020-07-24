import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./Country.js";
import { useSelector, useDispatch } from "react-redux";




const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--VeryLightGray);
  padding: 4em 2em;
`;






function ContryList() {
  const dispatch = useDispatch()
  const countryList = useSelector((state) => state.countryList)
 // /* console.log(countryList) */
  // const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((resp) => resp.json())
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list
        })
        //  setCountryList(data);
     //   console.log(list.length);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <CountryListStyled>
      {
        countryList.map(({ name, region, population, capital, flag, numericCode }) => {
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
        })}
    </CountryListStyled>
  );
}
export default ContryList;
