import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import SearchHook from './SearchHook'
import Country from "./Country.js";
import Search from "./Search.js"
import NoResults from "./NoResults"
/* import { useSelector, useDispatch } from "react-rtedux"; */




const CountryResultStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--VeryLightGray);
  padding: 7em 2em;
  @media screen and (min-width: 720px){
    margin-right: 0;
    margin-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2em;
    padding: 0;
  
  }
`;



function CountryList({ params }) {

  const { keyword } = params
  const [flags, setFlags] = useState([]);
  const [result, setResult] = useState(false);

  useEffect(function () {
    SearchHook({ keyword })
      .then(flags => {
        if (flags !== undefined) {
          setFlags(flags)

          setResult(false)
        }
        else {
          setResult(true)
        }
      })
  }, [keyword, result]);


  return (
    <Fragment>
      <Search />
      <CountryResultStyled >
        {

          result ? <NoResults /> : flags.map(({ name, region, population, capital, flag, numericCode }) => <Country className="cards-grid grid" key={numericCode} flag={flag} population={population} region={region} name={name} capital={capital} />)
        }
      </CountryResultStyled>
    </Fragment>
  )
}

export default CountryList