import summaryActionTypes from './summary.types';

export function fetchSummaryStart(titleId) {
    return {
        type: summaryActionTypes.FETCH_SUMMARY_START,
        payload: titleId
    }
}

export function fetchSummarySuccess(summaryData) {
    return {
        type: summaryActionTypes.FETCH_SUMMARY_SUCCESS,
        payload: summaryData
    }
}

export function fetchSummaryFailure(error) {
    return {
        type: summaryActionTypes.FETCH_SUMMARY_FAILURE,
        payload: error
    }
}

export function fetchTitleGenresStart(url) {
    return {
        type: summaryActionTypes.FETCH_TITLE_GENRES_START,
        payload: url
    }
}

export function fetchTitleGenresSuccess(genresData) {
    return {
        type: summaryActionTypes.FETCH_TITLE_GENRES_SUCCESS,
        payload: genresData
    }
}

export function fetchTitleGenresFailure(error) {
    return {
        type: summaryActionTypes.FETCH_TITLE_GENRES_FAILURE,
        payload: error
    }
}

export function fetchCharactersStart(url, limit) {
    return {
        type: summaryActionTypes.FETCH_CHARACRERS_START,
        payload: {url, limit}
    }
}

export function fetchCharactersSuccess(charactersData) {
    return {
        type: summaryActionTypes.FETCH_CHARACRERS_SUCCESS,
        payload: charactersData
    }
}

export function fetchCharactersFailure(error) {
    return {
        type: summaryActionTypes.FETCH_CHARACRERS_FAILURE,
        payload: error
    }
}


export function clearSummaryData() {
    return {
        type: summaryActionTypes.CLEAR_SUMMARY_DATA
    }
}