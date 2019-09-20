import us from "../../Languages/us.json";
import es from "../../Languages/es.json";
import {changeLanguageType, getLanguageType, getLanguagesType} from '../actions/ActionsType'

const langs = [es, us];
var languageActive = us
const initialState = {
  languages: langs,
  language: languageActive
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case changeLanguageType:
      return {
        ...state,
        language: action.payload
      };
    case getLanguageType:
      return {
        ...state,
        language: languageActive
      }
    case getLanguagesType:
      return {
        ...state,
        languages: langs
      }
    default:
      return state;
  }
};

