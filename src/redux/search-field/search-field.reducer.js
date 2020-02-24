import searchFieldTypes from './search-field.types';

const INITIAL_STATE = {
    filterText: '',
    hidden: true,
    isLoading: false,
    filteredTitlesData: null,
    searchFieldError: null
}

function searchFieldReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case searchFieldTypes.TOGGLE_SEARCH_POPUP_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case searchFieldTypes.CHANGE_FILTER_TEXT:
            return {
                ...state,
                filterText: action.payload
            }
        case searchFieldTypes.FETCH_FILTERED_TITLES_START:
            return {
                ...state,
                isLoading: true,
                filteredTitlesData: null
            }
        case searchFieldTypes.FETCH_FILTERED_TITLES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                filteredTitlesData: action.payload
            }
        case searchFieldTypes.FETCH_FILTERED_TITLES_FAILURE:
            return {
                ...state,
                searchFieldError: action.payload
            }
        case searchFieldTypes.CLEAR_FILTERED_TILES:
            return {
                ...state,
                filteredTitlesData: null
            }
        case searchFieldTypes.CLEAR_SEARCH_FIELD:
            return {
                ...INITIAL_STATE
            }
        default:
            return {
                ...state
            }
    }
}

export default searchFieldReducer;