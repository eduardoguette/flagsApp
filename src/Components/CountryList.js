import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Country from "./Country.js";
import Search from "./Search.js";
import { connect } from "react-redux";


const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--VeryLightGray);
  margin-top: 7em;

  @media screen and (min-width: 720px) {
    margin-right: 0;
    margin-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2em;
  }
  @media screen and (min-width: 940px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

function CountryList({ banderas, bandera }) {
  const [flags, setFlags] = useState([]);
  useEffect(() => {

    if (bandera.length > 0) {
      banderas.then((flags) => {
        var tmp = flags.filter(({ name }, i) => name.toLowerCase().includes(bandera));
        setFlags(tmp);
      });
    } else {
      banderas.then((flags) => {
        setFlags(flags);
      });
    }
  }, [bandera, banderas]);

  return (
    <>
      <Search />
      <CountryListStyled>
        {flags.map(({ name, region, population, capital, flag, numericCode }) => {
          return <Country key={numericCode} flag={flag} population={population} region={region} name={name} capital={capital} />;
        })}
      </CountryListStyled>
    </>
  );
}

const mapStateToProps = (state) => ({
  banderas: state.banderas,
  bandera: state.bandera,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
