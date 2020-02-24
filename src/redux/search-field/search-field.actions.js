import searchFieldTypes from './search-field.types';

export function toggleSearchPopupHidden() {
    return {
        type: searchFieldTypes.TOGGLE_SEARCH_POPUP_HIDDEN
    }
}

export function changeFilterText(newFilterText) {
    return {
        type: searchFieldTypes.CHANGE_FILTER_TEXT,
        payload: newFilterText
    }
}

export function fetchFilteredTitlesStart(filterText) {
    return {
        type: searchFieldTypes.FETCH_FILTERED_TITLES_START,
        payload: filterText
    }
}

export function fetchFilteredTitlesSuccess(filteredTitlesData) {
    return {
        type: searchFieldTypes.FETCH_FILTERED_TITLES_SUCCESS,
        payload: filteredTitlesData
    }
}

export function fetchFilteredTitlesFailure(error) {
    return {
        type: searchFieldTypes.FETCH_FILTERED_TITLES_FAILURE,
        payload: error
    }
}

export function clearSearchField() {
    return {
        type: searchFieldTypes.CLEAR_SEARCH_FIELD
    }
}

export function clearFilteredTitles() {
    return {
        type: searchFieldTypes.CLEAR_FILTERED_TILES
    }
}