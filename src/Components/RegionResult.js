import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import getRegions from "./getRegions";
import Country from "./Country.js";
import NoResults from "./NoResults";
import Search from "./Search";
import { connect } from "react-redux";

const RegionResultStyled = styled.div`
  display: grid;
  grid-row-gap: 2em;
  justify-content: center;
  background: var(--VeryLightGray);
  margin-top: 7em;
  padding-bottom: 5em;
  grid-template-columns: repeat(auto-fit, minmax(270px, 280px));
  justify-content: flex-start;
  @media screen and (min-width: 720px) {
    margin-right: 0;
    margin-left: 0;
    justify-content: ${(props) => (props.bandera > 0 ? "flex-start" : "space-between")};
    grid-template-columns: ${(props) => (props.bandera > 0 ? "repeat(auto-fit, minmax(270px, 280px))" : "repeat(auto-fit, minmax(270px, 1fr))")};
    margin-top: 6em;
    padding-bottom: $margin-top;
  }
  @media screen and (min-width: 1024px) {
    /*  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); */
    margin-top: 3em;
  }
`;

function RegionResult({ params, bandera }) {
  const { keyword } = params;
  const [flags, setFlags] = useState([]);
  const [noResutls, setNoResutls] = useState(false);

  useEffect(() => {
    getRegions({ keyword }).then((flags) => {
      var tmp = flags.filter(({ name }, i) => name.toLowerCase().includes(bandera));
      setFlags(tmp);
      if (tmp.length < 1) setNoResutls(true);
      else setNoResutls(false);
    });
  }, [bandera, flags.length, keyword]);

  return (
    <Fragment>
      <Search />
      <RegionResultStyled bandera={bandera.length}>{noResutls ? <NoResults /> : flags.map(({ name, region, population, capital, flag, numericCode }) => <Country key={numericCode} flag={flag} population={population} region={region} name={name} capital={capital} />)}</RegionResultStyled>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  banderas: state.banderas,
  bandera: state.bandera,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(RegionResult);
