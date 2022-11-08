import styled from "styled-components";

export const StyledFavoritos = styled.div`
  width: 100%;
  padding: 16px;
  overflow: hidden;
  
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding-left: 16px;

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }
    div{
      display: inline-block;
      margin: 0 5px 0 5px;
      text-align: center;
      img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
      p{
        font-size: 13px;
      }
    }
  }
`;