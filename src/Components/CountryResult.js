import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchHook from './SearchHook'
import Country from "./Country.js";
import { Link } from "wouter";
/* import { useSelector, useDispatch } from "react-redux"; */




const CountryResultStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--VeryLightGray);
  padding: 4em 2em;
`;



function CountryList({params}) {
  const { keyword } = params
  const [flags, setFlags] = useState([]);

  useEffect(function () {
    SearchHook({ keyword })
      .then(flags => {
        
          setFlags(flags)
       
      })
  }, [keyword]);


  return (
    <CountryResultStyled>
      {
        flags.map(({ name, region, population, capital, flag, numericCode }) => {
          return (
            <Link to={`/name/${keyword}`} key={numericCode}>
              <Country
              key={numericCode}
              flag={flag}
              population={population}
              region={region}
              name={name}
              capital={capital}
            />
              
              </Link>
       /*      <Country
              key={numericCode}
              flag={flag}
              population={population}
              region={region}
              name={name}
              capital={capital}
            /> */
          )
        })
      }
    </CountryResultStyled>
  )
}

export default CountryList