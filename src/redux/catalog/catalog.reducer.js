import catalogActionTypes from './catalog.types';

const INITIAL_STATE = {
    currentPage: 1,
    catalogMode: null,
    modeSubtype: null,
    isTitlesLoaded: false,
    titlesData: null,
    catalogError: null,
    genresData: null,
    genresError: null
}

export default function catalogReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case catalogActionTypes.FETCH_TITLES_START:
            return {
                ...state,
                isTitlesLoaded: false
            }
        case catalogActionTypes.FETCH_TITLES_SUCCESS:
            return {
                ...state,
                titlesData: action.payload,
                isTitlesLoaded: true
            }
        case catalogActionTypes.FETCH_TITLES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case catalogActionTypes.FETCH_GENRES_SUCCESS:
            return {
                ...state,
                genresData: action.payload
            }
        case catalogActionTypes.FETCH_GENRES_FAILURE:
            return {
                ...state,
                genresError: action.payload
            }
        case catalogActionTypes.CLEAR_CATALOG_TITLES:
            return {
                ...state,
                currentPage: 1,
                searchMode: null,
                modeSubtype: null,
                isTitlesLoaded: false,
                titlesData: null,
                catalogError: null
            }
        case catalogActionTypes.SET_CATALOG_MODE:
            return {
                ...state,
                catalogMode: action.payload
            }
        case catalogActionTypes.SET_MODE_SUBTYPE:
            return {
                ...state,
                modeSubtype: action.payload
            }
        case catalogActionTypes.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default: 
            return state
    }
}