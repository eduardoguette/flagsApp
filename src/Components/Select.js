import React from 'react'
import styled from "styled-components"

const DivSelect = styled.div`
  margin-top: 2em;
  position: relative;
  display: flex;
  align-items: center;
  
  select{
    color: var(--VeryDarkBlueLightModeT);
    background-color: var(--ColorCads);
    width: 60%;
    height: 40px;
    border-radius: 5px;
    padding: 0 1.5em;
    appearance: none;
    --webkit-appearance:none;
    position: relative;
    font-family: var(--nunito);
    font-size: .9em;
    border: none;
    font-weight: 600;
    outline: none;
  }
  
  option:focus{
    outline: none;
    border:1px solid red;
    border-radius: 4px;
  }
  ::after{
   content:"keyboard_arrow_down";
   font-family:"material icons"; 
   position: static;
   z-index: 1;
   margin-left: -2em;
  }
  
  .opt-sel{
    font-weight: 600;
    position: absolute;
    top: 100px;
    padding: 10em;
  }
`

function Select() {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"]
  return (
    <>
      <DivSelect >

        <select>
          <option>Filter by Region</option>
          {
            regions.map((region, i) => <option className="opt-sel" value={i} key={i}>{region}</option>)
          }
        </select>
      </DivSelect>
    </>
  )
}

export default Select
