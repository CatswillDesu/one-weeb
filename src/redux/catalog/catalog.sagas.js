import { takeEvery, put, all } from 'redux-saga/effects';

import catalogActionTypes from './catalog.types';
import { fetchTitlesSuccess, fetchTitlesFailure, fetchGenresSuccess, fetchGenresFailure } from './catalog.actions';
import { rootPath, requestUrl } from '../../utils'; 

const genresFetchLimit = 20;

function* fetchTitlesAsync({ payload: { searchMode, modeSubtype, offset } }) {
    try {
        let titlesData;
        if (searchMode === 'genres') {
            titlesData = yield requestUrl(`${rootPath}/anime?filter[${searchMode}]=${modeSubtype}&sort=-userCount&page[offset]=${offset}&page[limit]=16`);
        } else {
            titlesData = yield requestUrl(`${rootPath}/anime?${searchMode}&sort=-userCount&page[offset]=${offset}&page[limit]=16`);
        }
        yield put(fetchTitlesSuccess(titlesData))
    } catch(err) {
        yield put(fetchTitlesFailure(err))
    }
}

function* onFetchTitlesStart() {
    yield takeEvery(
        catalogActionTypes.FETCH_TITLES_START,
        fetchTitlesAsync
    )
}

function* fetchGenresAsync() {
    try {
        const genresData = yield requestUrl(`${rootPath}/genres?page[limit]=${genresFetchLimit}&fields[anime]=id,posterImage,titles,canonicalTitle,startDate,averageRating,slug,episodeCount`);
        yield put(fetchGenresSuccess(genresData))
    }catch(err) {
        yield put(fetchGenresFailure(err))
    }
}

function* onFetchGenresStart() {
    yield takeEvery(
        catalogActionTypes.FETCH_GENRES_START,
        fetchGenresAsync
    )
}

export default function* catalogRootSaga() {
    yield all([
        onFetchTitlesStart(),
        onFetchGenresStart()
    ])
}