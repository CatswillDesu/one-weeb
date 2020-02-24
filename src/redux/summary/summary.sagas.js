import { takeEvery, put, all } from 'redux-saga/effects';

import summaryActionTypes from './summary.types';
import { fetchSummarySuccess, fetchSummaryFailure, fetchTitleGenresSuccess, fetchTitleGenresFailure } from './summary.actions';
import { rootPath, requestUrl, routeConverter } from '../../utils';

function* fetchSummaryAsync({ payload: titleId }) {
    try {
        const summaryData = yield requestUrl(`${rootPath}/anime/${routeConverter('exact', titleId)}`);
        yield put(fetchSummarySuccess(summaryData));
    } catch(err) {
        yield put(fetchSummaryFailure(err))
    }
}

function* onFetchSummaryStart() {
    yield takeEvery(
        summaryActionTypes.FETCH_SUMMARY_START,
        fetchSummaryAsync
    )
}

function* fetchGenresAsync({ payload: url }) {
    try {
        const genresData = yield requestUrl(`${url}?page[limit]=20`);
        yield put(fetchTitleGenresSuccess(genresData));
    } catch(err) {
        yield put(fetchTitleGenresFailure(err))
    }
}

function* onFetchGenresStart() {
    yield takeEvery(
        summaryActionTypes.FETCH_TITLE_GENRES_START,
        fetchGenresAsync
    )
}

export default function* summaryRootSaga() {
    yield all([
        onFetchSummaryStart(),
        onFetchGenresStart()
    ])
}