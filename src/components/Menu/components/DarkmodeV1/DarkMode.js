import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../DarkmodeV1/Theme";
import GlobalTheme from "../DarkmodeV1/Globals";
import styled from "styled-components";

function DarkMode() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />
          <ButtonChange>
            <input onClick={toggleTheme} id="switch-shadow" class="switch switch--shadow" type="checkbox"/>
            <label for="switch-shadow"></label>
          </ButtonChange>
      </Fragment>
    </ThemeProvider>
  );
}

const ButtonChange = styled.div`
    margin: 30px;
    width: 60px;

  .switch {
    visibility: hidden;
    position: absolute;
    margin-left: -9999px;
  }

  .switch + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  .switch--shadow + label {
    padding: 2px;
    width: 45px;
    height: 20px;
    background-color: #dddddd;
    border-radius: 60px;
  }
  .switch--shadow + label:before,
  .switch--shadow + label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
  }
  .switch--shadow + label:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 60px;
    transition: background 0.4s;
  }
  .switch--shadow + label:after {
    width: 22px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
  }
  .switch--shadow:checked + label:before {
    background-color: #8ce196;
  }
  .switch--shadow:checked + label:after {
    transform: translateX(21px);
  }
`;

export default DarkMode;