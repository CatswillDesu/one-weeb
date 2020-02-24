import { takeEvery, put, all } from 'redux-saga/effects';

import catalogPreviewActionTypes from './catalog-preview.types';
import { fetchPreviewsSuccess, fetchPreviewsFailure } from './catalog-preview.actions';
import { rootPath, requestUrl, routeConverter } from '../../utils'; 

const previewsCount = 6;

function* fetchPreviewsAsync({ payload: previewType } ) {
    try {
        const previewsData = yield requestUrl(`${rootPath}/anime${routeConverter(previewType)}&page[limit]=${previewsCount}&page[offset]=0&fields[anime]=id,posterImage,titles,canonicalTitle,startDate,averageRating,slug,episodeCount`);
        yield put(fetchPreviewsSuccess(previewType, previewsData))
    } catch(err) {
        yield put(fetchPreviewsFailure(err))
    }
}

function* onFetchPreviewsStart() {
    yield takeEvery(
        catalogPreviewActionTypes.FETCH_PREVIEWS_START,
        fetchPreviewsAsync
    )
}

export default function* catalogPreviewRootSaga() {
    yield all([
        onFetchPreviewsStart()
    ])
}