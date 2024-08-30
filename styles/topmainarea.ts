import { css } from "hono/css";
import styled from "@nobody/styled-components-deno";
const TopMainAreaCSS = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width:1300px) {
    display: flex;
    flex-direction: column;
  }

  background-color: black;
  width: 100%;

  & h1 {
    color: white
  }
  & p {
    color: white
  }
`;

const TopTextCSS = styled.div`
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width:1300px) {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  height: 60%;

`;

const TopVideoCSS = styled.video` 
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width:1300px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  width: 100%;
`;

const TopMainTitleCSS = styled.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500
`;

const TopMainSmallTitleCSS = styled.p`
  margin-left: 70px;
  margin-right: 70px;
  font-size: 2em;
  margin-top: 1px;
`;

export default TopMainAreaCSS;

export { TopMainSmallTitleCSS, TopMainTitleCSS, TopTextCSS, TopVideoCSS };
