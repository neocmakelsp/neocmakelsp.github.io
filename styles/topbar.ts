import styled from "@nobody/styled-components-deno";

const TopBar = styled.nav`
  backdrop-filter: blur(10px);
  overflow: hidden;
  background-color: #33333067;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 3;
  visibility: visible;
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

  @media screen and (max-width:900px) {
    visibility: hidden;
  }
`;

export default TopBar;
