import collectionActionTypes from './collection.types';

export function addTitleToCollection({ collectionTitles, titleToAdd }) {
    return {
        type: collectionActionTypes.ADD_TITLE_TO_COLLECTION,
        payload: { collectionTitles, titleToAdd }
    }
}

export function removeTitleFromCollection({ collectionTitles, titleToRemove }) {
    return {
        type: collectionActionTypes.REMOVE_TITLE_FROM_COLLECTION,
        payload: { collectionTitles, titleToRemove } 
    }
}


export function changeCollectionTitle({ collectionTitles, newTitleData }) {
    return {
        type: collectionActionTypes.CHANGE_COLLECTION_TITLE,
        payload: { collectionTitles, newTitleData }
    }
}

export function openEditModal(titleToEdit) {
    return {
        type: collectionActionTypes.OPEN_EDIT_MODAL,
        payload: titleToEdit
    }
}

export function closeEditModal() {
    return {
        type: collectionActionTypes.CLOSE_EDIT_MODAL
    }
}