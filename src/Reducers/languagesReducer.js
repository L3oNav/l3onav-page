
const languagesReducer = (state = [], action) => {
    switch (action.type) {
        case 'pull_languages':
            return{ ...state, languages:action.payload }
        case 'pull_language':
            return{ ...state, language:action.payload }
        case 'push_language':
            return{ ...state, languages:action.payload }
        default:
            return state;
    }
}

export default languagesReducer;