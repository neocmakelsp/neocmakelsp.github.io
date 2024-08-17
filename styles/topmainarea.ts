import { css } from "hono/css";

const TopMainAreaCSS = css`
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
  & h3 {
    color: white
  }
`;

const TopTextCSS = css`
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width:1300px) {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  height: 60%;

`;

const TopVideoCSS = css`
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width:1300px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  width: 100%;
`;

const TopMainTitleCSS = css`
  text-align: center;
  font-size: 3em;
  font-weigth: 500
`;

const TopMainSmallTitleCSS = css`
  text-align: center;
  margin-top: 1px;
`;

export default TopMainAreaCSS;

export { TopMainSmallTitleCSS, TopMainTitleCSS, TopTextCSS, TopVideoCSS };
