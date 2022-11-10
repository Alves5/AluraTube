import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  h2{
    color: ${({ theme }) => theme.h2};
  }
  p{
    color: ${({ theme }) => theme.h2};
  }
  .header{
    background-color: ${({ theme }) => theme.header};
  }
  .menu{
    background-color: ${({ theme }) => theme.menu};
    border: 1px solid ${({ theme }) => theme.borderMenu};
  }
  .text{
    fill: ${({ theme }) => theme.textFill};
  }
  .span{
    color: ${({ theme }) => theme.span};
  }
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;