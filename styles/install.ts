import styled from "@nobody/styled-components-deno";

const InstallMainCSS = styled.section`
  display: flex;
  flex-direction: column;

  background-color: #071521ff;
  width: 100%;

  & h1 {
    color: white;
  }
  & p {
    color: white;
  }
`;

const InstallTitleCSS = styled.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
`;

const InstallBodyCSS = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 32px;
  margin-bottom: 300px;
  & span {
    font-size: 32px;
  }
  @media screen and (max-width: 700px) {
    font-size: 22px;
    & span {
      font-size: 22px;
    }
  }
`;

const InstallCodeCopyCSS = styled.div`
  position: relative;
  color: #99c7ed;
  font-size: 26px;
  margin-right: 50px;
  margin-left: 50px;
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
  & pre {
    padding: 10px;
    background-color: #0c3e4d;
    border-radius: 5px;
    overflow-x: auto;
  }
  & button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export { InstallBodyCSS, InstallCodeCopyCSS, InstallMainCSS, InstallTitleCSS };
