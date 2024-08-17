import { css } from "hono/css";

const TopMainAreaCSS = css`
  display: flex;
  background-color: black;
  height: 700px;
  width: 100%;
  top: 0px;
  flex-direction: column;
  & h1 {
    color: white
  }
  & h3 {
    color: white
  }
`;

const TopMainTitleCSS = css`
  text-align: center;
  width: 100%;
  margin-top: 100px;
`;

const TopMainSmallTitleCSS = css`
  text-align: center;
  width: 100%;
  margin-top: 1px;
`;

export default TopMainAreaCSS;

export { TopMainSmallTitleCSS, TopMainTitleCSS };
