import catalogActionTypes from './catalog.types';

export function setCatalogMode(newCatalogMode) {
    return {
        type: catalogActionTypes.SET_CATALOG_MODE,
        payload: newCatalogMode
    }
}

export function setModeSubtype(newModeSubtype) {
    return {
        type: catalogActionTypes.SET_MODE_SUBTYPE,
        payload: newModeSubtype
    }
}

export function fetchTitlesStart(searchMode, modeSubtype, offset) {
    return {
        type: catalogActionTypes.FETCH_TITLES_START,
        payload: { searchMode, modeSubtype, offset }
    }
}

export function fetchTitlesSuccess(titlesData) {
    return {
        type: catalogActionTypes.FETCH_TITLES_SUCCESS,
        payload: titlesData
    }
}

export function fetchTitlesFailure(error) {
    return {
        type: catalogActionTypes.FETCH_TITLES_FAILURE,
        payload: error
    }
}

export function fetchGenresStart() {
    return {
        type: catalogActionTypes.FETCH_GENRES_START
    }
}

export function fetchGenresSuccess(genresData) {
    return {
        type: catalogActionTypes.FETCH_GENRES_SUCCESS,
        payload: genresData
    }
}

export function fetchGenresFailure(error) {
    return {
        type: catalogActionTypes.FETCH_GENRES_FAILURE,
        payload: error
    }
}

export function clearCatalogTitles() {
    return {
        type: catalogActionTypes.CLEAR_CATALOG_TITLES
    }
}

export function changeCurrentPage(pageIndex) {
    return {
        type: catalogActionTypes.CHANGE_CURRENT_PAGE,
        payload: pageIndex
    }
}