import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./Country.js";


const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  border: 1px solid red;
  justify-content: center;
  background: var(--VeryLightGray);
  padding: 4em 2em;
`;

function ContryList() {
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((resp) => resp.json())
      .then((data) => {
        setCountryList(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <CountryListStyled>
      {
      countryList.map(({ name, region, population,capital,flag }) => {
        return (
        <Country
        flag={flag} 
        population={population} 
        region={region} 
        name={name} 
        capital={capital}
        />
      )})}
    </CountryListStyled>
  );
}
export default ContryList;
