import styled from "@nobody/styled-components-deno";

const FeatureMainCSS = styled.section`
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

const FeatureTitleCSS = styled.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500
`;

const FeatureCardTitleCSS = styled.h1`
  text-align: center;
  font-size: 2em;
  font-weight: 100
`;

const FeatureGridCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(22em,1fr));
  width: 100%;
  margin: .5rem;
  justify-items: stretch;
  overflow-y: auto;
  max-height: 100%;
  margin-bottom: 20px;
`;

const FeatureCardCSS = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0d2e5f;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 30px;
`;

const FeatureDescriptionCSS = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 25px;
  margin-top: 1px;
`;

export {
  FeatureCardCSS,
  FeatureCardTitleCSS,
  FeatureDescriptionCSS,
  FeatureGridCSS,
  FeatureTitleCSS,
};
