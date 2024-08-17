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

const FeatureTitleCSS = css`
  text-align: center;
  font-size: 3em;
  font-weight: 500
`;

const FeatureCardTitleCSS = css`
  text-align: center;
  font-size: 2em;
  font-weight: 100
`;

const FeatureGridCSS = css`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(23em,1fr));
  width: 100%;
  margin: .5rem;
  justify-items: stretch;
  overflow-y: auto;
  max-height: 100%;
  margin-bottom: 20px;
`;

const FeatureCardCSS = css`
  display: flex;
  flex-direction: column;
  background-color: #0d2e5f;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 30px;
`;

const FeatureDescriptionCSS = css`
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
