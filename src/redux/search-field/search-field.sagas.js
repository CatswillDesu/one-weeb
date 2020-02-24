import { takeLatest, put, all } from 'redux-saga/effects'

import searchFieldTypes from './search-field.types';
import { fetchFilteredTitlesSuccess, fetchFilteredTitlesFailure } from './search-field.actions';
import { rootPath, requestUrl, routeConverter } from '../../utils';

const filteredTitlesLimitCount = 5;

function* fetchFilteredTitlesAsync({ payload: filterText }) {
    try {
        const filteredTitles = yield requestUrl(`${rootPath}/anime?page[limit]=${filteredTitlesLimitCount}${routeConverter('text-filter', undefined, filterText)}`);
        yield put(fetchFilteredTitlesSuccess(filteredTitles));
    } catch(err) {
        yield put(fetchFilteredTitlesFailure(err))
    }
}

function* onFetchFilteredStart() {
    yield takeLatest(
        searchFieldTypes.FETCH_FILTERED_TITLES_START,
        fetchFilteredTitlesAsync
    ) 
}

function* searchFieldRootSaga() {
    yield all([
        onFetchFilteredStart()
    ])
}

export default searchFieldRootSaga;