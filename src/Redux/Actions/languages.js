export const changeLanguage = changeTo => dispatch => {
	//? changeTo is the name of language to change.
	if (changeTo !== 'US' && changeTo !== 'ES') {
		throw new Error(`${changeTo} isn't a valid input value.`);
	}
	dispatch({
		type: 'changeLanguage',
		payload: changeTo
	});
};

export const getLanguage = () => dispatch => dispatch({ type: 'getLanguage' });
