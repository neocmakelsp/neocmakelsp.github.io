import { css } from "hono/css";

const FeatureMainCSS = css`
  display: flex;
  flex-direction: column;

  background-color: #0c2e4d;
  width: 100%;

  & h1 {
    color: white
  }
  & p {
    color: white
  }
`;

export default FeatureMainCSS;

const FutureTitleCSS = css`
  text-align: center;
  font-size: 3em;
  font-weigth: 500
`;

export { FutureTitleCSS };
