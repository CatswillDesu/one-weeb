import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import catalogPreviewReducer from './catalog-preview/catalog-preview.reducer';
import catalogReducer from './catalog/catalog.reducer';
import summaryReducer from './summary/summary.reducer'; 
import searchFieldReducer from './search-field/search-field.reducer';
import collectionReducer from './collection/collection.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['collection']
}

const rootReducer = combineReducers({
    catalogPreview: catalogPreviewReducer,
    catalog: catalogReducer,
    summary: summaryReducer,
    searchField: searchFieldReducer,
    collection: collectionReducer
})

export default persistReducer(persistConfig, rootReducer);