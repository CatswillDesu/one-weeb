import collectionActionTypes from './collection.types';
import { addTitleToCollection, changeCollectionTitle } from './collection.utils';

const INITIAL_STATE = {
    collectionTitles: {},
    isModalHidden: true,
    titleToEdit: null
}

function collectionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case collectionActionTypes.ADD_TITLE_TO_COLLECTION:
            return {
                ...state,
                collectionTitles: addTitleToCollection(action.payload.collectionTitles, action.payload.titleToAdd)
            }
        case collectionActionTypes.REMOVE_TITLE_FROM_COLLECTION:
            const { [action.payload.titleToRemove.id]: titleToRemove, ...filteredCollection } = action.payload.collectionTitles;
            
            return {
                ...state,
                collectionTitles: filteredCollection
            }
        case collectionActionTypes.CHANGE_COLLECTION_TITLE:
            return {
                ...state,
                collectionTitles: changeCollectionTitle(action.payload.collectionTitles, action.payload.newTitleData)
            }
        case collectionActionTypes.OPEN_EDIT_MODAL:
            return {
                ...state,
                titleToEdit: action.payload,
                isModalHidden: false
            }
        case collectionActionTypes.CLOSE_EDIT_MODAL:
            return {
                ...state,
                titleToEdit: null,
                isModalHidden: true
            }
        default:
            return state
    }
}

export default collectionReducer;