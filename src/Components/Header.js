import React, { useState, useEffect } from 'react'
import styled from "styled-components"


const DivHeader = styled.div`
  height: 70px;
  width: auto;
  font-size: .8em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2em;
  background-color: var(--headerColor);
  box-shadow: 2px 0px 5px var(--shadow);
  .header{
  color: var(--VeryDarkBlueDarkModeBg);
  padding: 0 1em;
  display: flex;
  width: 100%;
  justify-content: space-between;
  }
  i{
  margin: 0 1em;
  transform: rotate(-30deg);
  }
  .dark-light{
    display: flex;
    align-items: center;
    margin-right: .5em;
    cursor: pointer;
    font-size: 1.1em;
  }
  a{
    font-weight: 700;
    text-decoration: none;
    font-size: 1.2em;
    color: var(--VeryDarkBlueDarkModeBg);
  }
`



export default function Header() {


  const [darkMode, setDarkMode] = useState(false);
 
  const handleClick = (e) => {
    document.body.classList.toggle('is-dark-mode')
    if (!darkMode){
      setDarkMode(true)
      localStorage.setItem('DarkMode', 'isDark');

    }else{
      setDarkMode(false)
      localStorage.removeItem("DarkMode")
    }
  }
  useEffect(() => {
    if(localStorage.getItem("DarkMode") === "isDark"){
      document.body.className = "is-dark-mode"
      setDarkMode(true)
    }
  }, [])
  
  return (
    <DivHeader>
      <div className="header">
        <div>
          <a href="/">Where in the world?</a>
        </div>
        <div className="dark-light" onClick={handleClick}>
          {
            darkMode ? <i className="fas fa-moon"></i> : <i className="far fa-moon"></i>
          }
          <strong>Dark Mode</strong>
        </div>
      </div>
    </DivHeader>
  )
}
