import { css } from "hono/css";

const InstallMainCSS = css`
  display: flex;
  flex-direction: column;

  background-color: #071521ff;
  width: 100%;

  & h1 {
    color: white
  }
  & p {
    color: white
  }
`;

const InstallTitleCSS = css`
  text-align: center;
  font-size: 3em;
  font-weight: 500
`;

const InstallBodyCSS = css`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 30px;
  margin-bottom: 300px;
`;

export { InstallBodyCSS, InstallMainCSS, InstallTitleCSS };
