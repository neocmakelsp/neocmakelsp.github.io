import styled from "@nobody/styled-components-deno";

const SideBar = styled.li<
  { isOpen?: boolean; autohide?: boolean; zIndex?: number; top?: string }
>`
  backdrop-filter: blur(10px);
  width: 180px;
  height: 100%;
  background-color: #333330aa;
  position: fixed;
  top: ${({ top }) => top ? top : "0"};
  z-index: ${({ zIndex }) => zIndex ? zIndex : 3};
  visibility: ${({ autohide }) => autohide ? "hidden" : "visible"};
  list-style-type: none;
  display: flex;
  /* move flex-items in column */
  flex-direction: column;

  left: ${({ isOpen }) => isOpen ? "0" : "-200px"} ;
  transition: left 0.3s ease-in-out;

  @media screen and (max-width:900px) {
    visibility: visible
  }
  & button {
    background-color: transparent;
    border-width: 0;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  & button:hover {
    background-color: #ddd;
    color: black;
  }
`;

const SideBarA = styled.a<{ isBottom?: boolean }>`
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-top: ${({ isBottom }) => isBottom ? "auto" : "0"};
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const MenuButton = styled.button<
  { isOpen?: boolean; alwaysShown?: boolean; top?: number }
>`
  position: fixed;
  top: ${({ top }) => top ? top : 20}px;
  left: ${(props) => props.isOpen ? "210px" : "20px"} ;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: ${({ alwaysShown }) => alwaysShown ? "visible" : "hidden"};
  background-image: url("static/menu.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  transition: left 0.3s ease-in-out;

  & hover {
    background-color: #0056b3;
  }

  @media screen and (max-width:900px) {
    visibility: visible;
  }

`;

export { MenuButton, SideBar, SideBarA };
