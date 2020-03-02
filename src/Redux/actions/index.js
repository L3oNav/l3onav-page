import {
	changeLanguageType,
	getLanguageType,
	getLanguagesType
} from "./ActionsType";
import us from "../../Languages/us.json";
import es from "../../Languages/es.json";
var changeTo = "Us";
export const changeLanguage = changeTo => dispatch => {
	dispatch({
		type: changeLanguageType,
		payload: changeTo
	});
};

export const getLanguage = () => dispatch => {
	dispatch({
		type: getLanguageType
	});
};

export const getLanguages = () => dispatch => {
	dispatch({
		type: getLanguagesType
	});
};
