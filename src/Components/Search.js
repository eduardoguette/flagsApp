import React, { useState } from "react";
import { useLocation } from "wouter";
import styled from "styled-components";
import { connect } from "react-redux";
const DivSearch = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  input {
    display: block;
    padding: 0 1em;
    height: 50px;
    width: 74%;
    border-radius: 5px;
    border: none;
    font-family: inherit;
    font-size: 0.9em;
    color: var(--VeryDarkBlueLightModeT);
    background-color: var(--ColorCads);
    font-weight: 600;
    padding-left: 5em;
    outline: 0;
  }
  input::placeholder {
    font-weight: 600;
    color: var(--colorPlaceHolder);
  }
  svg {
    position: relative;
    top: -36px;
    left: 30px;
    fill: var(--VeryDarkBlueLightModeT);
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    cursor: pointer;
    width: 220px;
    border-radius: 5px;
    position: absolute;
    z-index: 2;
  }

  ul > li {
    font-size: 0.9em;
    background-color: var(--ColorCads);
    padding-left: 2em;
    font-family: var(--nunito);
  }
  li:nth-child(2) {
    padding-top: 1.5em;
  }
  ul > li:not(.list-first) {
    display: none;
    background-color: var(--ColorCads);
  }
  ul > li.list-first {
    border-radius: 5px;
    padding-top: 1em;
    padding-bottom: 1em;
  }
  ul > li.list-first::after {
    content: "keyboard_arrow_down";
    font-family: "Material Icons";
    position: absolute;
    left: 13em;
    font-weight: bold;
    font-size: 1em;
  }
  ul:hover > li.list-first::after {
    content: "keyboard_arrow_down";
    transform: rotate(180deg);
  }

  ul > li:nth-child(2) {
    border-radius: 5px 5px 0 0;

    margin-top: 1em;
  }
  ul > li:last-child {
    border-radius: 0 0 5px 5px;
    padding-bottom: 1.5em;
  }
  .btn-clear {
    height: 30px;
    width: 30px;
    color: var(--VeryDarkBlueLightModeT);
    position: absolute;
    z-index: 1;
    cursor: pointer;
    left: 300px;
    top: 110px;
    text-align: center;
  }
  @media screen and (min-width: 720px) {
    input {
      width: 300px;
    }
    .btn-clear {
      left: 380px;
      top: 110px;
    }
  }
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0em;
    ul {
      right: 64px;
    }
    .btn-clear {
      left: 400px;
      top: 135px;
    }
  }
  @media screen and (min-width: 1024px) {
    ul {
      right: 70px;
    }
  }
  @media screen and (min-width: 1200px) {
    ul {
      right: 80px;
    }
    input {
      width: 400px;
    }
    .btn-clear {
      left: 510px;
    }
  }
  @media screen and (min-width: 1440px) {
    ul {
      right: 97px;
    }
    .btn-clear {
      left: 530px;
    }
  }
`;

function Search({ banderas, banderaSelec }) {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  // eslint-disable-next-line
  const [option, setOpt] = useState("");
  const [btn, setBtn] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const busqueda = e.target.value.toLowerCase();

    banderaSelec(busqueda);
    if (busqueda.length > 0) setBtn(true);
    else setBtn(false);
  };
  window.addEventListener("DOMContentLoaded", (e) => {
    if (window.location.pathname.includes("region")) {
      document.querySelector(".list-first").innerHTML = window.location.pathname.split("/").pop();
    }
  });
  const handleOption = (e) => {
    if (e.target.className === "opt-sel") {
      localStorage.setItem("region", e.target.innerHTML);
      setTimeout(() => {
        document.querySelector(".list-first").innerHTML = localStorage.getItem("region");
      }, 100);
    }
    if (e.target.className === "list-first" || e.target.className === "opt-sel") {
      document.querySelectorAll("ul > li:not(.list-first)").forEach((elem) => {
        if (elem.style.display !== "block") {
          elem.style.display = "block";
        } else {
          elem.style.display = "none";
        }
      });
    }
    var ind = e.target.textContent;
    if (e.target.textContent !== "Filter by Region" && e.target.className === "opt-sel") {
      setOpt(ind);
      pushLocation(`/region/${ind}`);
    } else if (e.target.className === "opt-sel") {
      pushLocation(`/`);
    }
    if (e.target.className === "btn-clear") {
      document.querySelector("input").value = "";
      banderaSelec("");
      setBtn(false);
    }
  };

  const regions = ["Filter by Region", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <DivSearch>
      <div className="container-form" onChange={handleChange}>
        {btn ? (
          <span onClick={handleOption} className="btn-clear">
            x
          </span>
        ) : (
          void 0
        )}
        <input type="text" placeholder="Search for a country..." onChange={handleChange} />
        {/*  <img src={search} alt="search"></img> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>
      <div className="container-select">
        <ul onClick={handleOption}>
          <li className="list-first">Filter by Region</li>
          {regions.map((region, i) => (
            <li className="opt-sel" key={i}>
              {region}
            </li>
          ))}
        </ul>
      </div>
    </DivSearch>
  );
}

const mapStateToProps = (state) => ({
  banderas: state.banderas,
});
const mapDispatchToProps = (dispatch) => ({
  banderaSelec(busqueda) {
    dispatch({
      type: "NUEVA_BUSQUEDA",
      busqueda,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
