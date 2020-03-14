
export enum MenuTypes {
  landing = 'landing',
  signin = 'signin',
  signup = 'signup',
  survey = 'survey',
  result = 'result',
};

export const Settings = {
  index: `/`,
  mapsin: {
    landing: `/mapsin/${MenuTypes.landing}`,
  }
}