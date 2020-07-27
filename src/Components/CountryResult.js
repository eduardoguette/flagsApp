import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchHook from './SearchHook'
import Country from "./Country.js";

import NoResults from "./NoResults"
/* import { useSelector, useDispatch } from "react-redux"; */




const CountryResultStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--VeryLightGray);
  padding: 3em 2em;
`;



function CountryList({ params }) {

  const { keyword } = params
  const [flags, setFlags] = useState([]);
  const [result, setResult] = useState(false);

  useEffect(function () {
    SearchHook({ keyword })
      .then(flags => {
        if (flags !== undefined){
          setFlags(flags)
          
          setResult(false)
        }
        else{
          setResult(true)
        } 
      })
  }, [keyword, result]);


  return (
    <CountryResultStyled>
          {

            result ? <NoResults/> : flags.map(({ name, region, population, capital, flag, numericCode }) =>  <Country key={numericCode} flag={flag} population={population} region={region} name={name} capital={capital}/> )  
          }
    </CountryResultStyled>
  )
}

export default CountryList