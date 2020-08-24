import React from "react";
import styled from "styled-components";
import { Link } from "wouter";
const CountryStyled = styled.div`
  /*   margin-top: 1em; */
  width: 264px;
  text-align: left;
  border-radius: 5px;
  background-color: var(--ColorCads);
  box-shadow: 0 0 7px 2px var(--shadow);
  overflow: hidden;
  height: 350px;
  margin: 0 1em;
  margin: auto;
  img {
    height: 160px;
    width: 100%;
    object-fit: cover;
  }
  img:hover {
    cursor: pointer;
  }
  :hover {
    box-shadow: 0px 0px 20px #1b272b38;
  }
  .details {
    padding: 1.5em;
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 800;
  }
  p {
    margin: 0;
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
  .go {
    position: absolute;
    z-index: 1;
    height: 160px;
    width: 264px;
  }
`;

function Country({ cantidadDeBanderas, flag, population, region, name, capital, numericCode }) {
  const popu = new Intl.NumberFormat("en-EN").format(population);
  return (
    <CountryStyled cantidadDeBanderas={cantidadDeBanderas}>
      <Link className="go" to={`/details/${name}`}></Link>
      <img src={flag} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong>
          {popu}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </CountryStyled>
  );
}
export default Country;
