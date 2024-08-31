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
  margin-left: 60px;
  margin-right: 60px;
  font-size: 32px;
  margin-top: 1px;
  & span {
    font-size: 32px;
  }
  @media screen and (max-width:700px) {
    font-size: 22px;
    & span {
      font-size: 22px;
    }
  }
`;

export default TopMainAreaCSS;

export { TopMainSmallTitleCSS, TopMainTitleCSS, TopTextCSS, TopVideoCSS };
