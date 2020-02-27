import catalogPreviewActionTypes from './catalog-preview.types';

const INITIAL_STATE = {
    previewsCollection: [],
    previewsEror: null,
    previewTypes: ['top-trending', 'top-rated', 'top-popular']
}

function catalogPreviewReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case catalogPreviewActionTypes.FETCH_PREVIEWS_START:
            return {
                ...state
            }
        case catalogPreviewActionTypes.FETCH_PREVIEWS_SUCCESS:
            return {
                ...state,
                previewsCollection: [
                    ...state.previewsCollection,
                    { previewsArray: action.payload.previewsData.data, previewType: action.payload.previewType }
                ]
            }
        case catalogPreviewActionTypes.FETCH_PREVIEWS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}

export default catalogPreviewReducer;