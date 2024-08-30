import styled from "@nobody/styled-components-deno";
const TopBar = styled.nav`
  backdrop-filter: blur(5px);
  overflow: hidden;
  background-color: #333;
  opacity: 0.8;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 3;
  & a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  & a.right {
    float: right
  }
  & a:hover {
    background-color: #ddd;
    color: black;
  }
`;

export default TopBar;
