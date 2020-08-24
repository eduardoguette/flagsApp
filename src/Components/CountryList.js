import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Country from "./Country.js";
import Search from "./Search.js";
import { connect } from "react-redux";

import NoResults from "./NoResults";
const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2em;
  justify-content: center;
  background: var(--VeryLightGray);
  margin-top: 3em;
  padding-bottom: 5em;
  grid-template-columns: repeat(auto-fit, minmax(270px, 280px));
  justify-content: center;
  @media screen and (min-width: 720px) {
    margin-right: 0;
    margin-left: 0;
    justify-content: ${(props) => (props.bandera > 0 ? "flex-start" : "space-between")};
    grid-template-columns: ${(props) => (props.bandera > 0 ? "repeat(auto-fit, minmax(270px, 280px))" : "repeat(auto-fit, minmax(270px, 1fr))")};
    margin-top: 2em;
    padding-bottom: $margin-top;
  }
  @media screen and (min-width: 1024px) {
    /*  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); */
    margin-top: 3em;
  }
`;

function CountryList({ banderas, bandera }) {
  const [flags, setFlags] = useState([]);

  const [noResutls, setNoResutls] = useState(false);
  useEffect(() => {
    if (bandera.length > 0) {
      banderas.then((flags) => {
        var tmp = flags.filter(({ name }, i) => name.toLowerCase().includes(bandera));
        setFlags(tmp);
        if (tmp.length < 1) setNoResutls(true);
        else setNoResutls(false);
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
      <CountryListStyled bandera={bandera.length}>
        {noResutls ? (
          <NoResults />
        ) : (
          flags.map(({ name, region, population, capital, flag, numericCode }) => {
            return <Country key={numericCode} cantidadDeBanderas={flags.length} flag={flag} population={population} region={region} name={name} capital={capital} />;
          })
        )}
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
