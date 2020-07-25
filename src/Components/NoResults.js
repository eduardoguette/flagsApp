import React from 'react'
import styled from "styled-components"
const DivNoResult = styled.div`
display: grid;
justify-content: center;
text-align: center;
a{
  display: block;
  margin-top: 5em;
  text-decoration: none;
  color: var(--VeryDarkBlueDarkModeBg);
}
`

function NoResults() {
  return (
    <DivNoResult>
      <h1> No results :( .. </h1>
      <small> <a href="/"> go to home  </a></small>
    </DivNoResult>
  )
}

export default NoResults
