import { css } from "hono/css";

const TopBar = css`
  overflow: hidden;
  background-color: #333;
  & a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  & a:hover {
    background-color: #ddd;
    color: black;
  }

  & a.active {
    background-color: #04AA6D;
    color: white;
  }
`;

export default TopBar;
