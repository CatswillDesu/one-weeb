import summaryActionTypes from './summary.types';

const INITIAL_STATE = {
    summaryData: null,
    genresData: null,
    summaryError: null,
    genresError: null,
    charactersData: null,
    charactersError: null
}

function summaryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case summaryActionTypes.FETCH_SUMMARY_SUCCESS:
            return {
                ...state,
                summaryData: action.payload
            }
        case summaryActionTypes.FETCH_SUMMARY_FAILURE:
            return {
                ...state,
                summaryError: action.payload
            }
        case summaryActionTypes.FETCH_TITLE_GENRES_SUCCESS:
            return {
                ...state,
                genresData: action.payload
            }
        case summaryActionTypes.FETCH_TITLE_GENRES_FAILURE:
            return {
                ...state,
                genresError: action.payload
            }
        case summaryActionTypes.FETCH_CHARACRERS_SUCCESS:
            return {
                ...state,
                charactersData: action.payload
            }
        case summaryActionTypes.FETCH_CHARACRERS_FAILURE:
            return {
                ...state,
                charactersError: action.payload
            }
        case summaryActionTypes.CLEAR_SUMMARY_DATA:
            return {
                ...INITIAL_STATE
            }
        default: 
            return {
                ...state
            }
    }
}

export default summaryReducer;