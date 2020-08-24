import React from "react";
import styled from "styled-components";
const DivNoResult = styled.div`
  margin: auto;
  width: 100vw;
  text-align: center;
  a {
    display: block;
    margin-top: 5em;
    text-decoration: none;
    color: var(--VeryDarkBlueDarkModeBg);
  }
`;

function NoResults() {
  return (
    <DivNoResult>
      <h1> No results... </h1>
    </DivNoResult>
  );
}

export default NoResults;
