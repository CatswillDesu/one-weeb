import { all } from 'redux-saga/effects';

import catalogPreviewRootSaga from './catalog-preview/catalog-preview.sagas';
import catalogRootSaga from './catalog/catalog.sagas';
import summaryRootSaga from './summary/summary.sagas';
import searchFieldRootSaga from './search-field/search-field.sagas';

export default function* rootSaga() {
    yield all([
        catalogRootSaga(),
        catalogPreviewRootSaga(),
        summaryRootSaga(),
        searchFieldRootSaga()
    ])
}