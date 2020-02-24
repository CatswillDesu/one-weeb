import catalogPreviewActionTypes from './catalog-preview.types';

const INITIAL_STATE = {
    isPreviewsLoaded: false,
    previewsData: {
        topTrending: null,
        topRated: null,
        topPopular: null
    },
    previewsEror: null
}

function catalogPreviewReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case catalogPreviewActionTypes.FETCH_PREVIEWS_START:
            return {
                ...state,
                isPreviewsLoaded: false
            }
        case catalogPreviewActionTypes.FETCH_PREVIEWS_SUCCESS:
            switch (action.payload.previewType) {
                case 'top-trending':
                    return {
                        ...state,
                        previewsData: {
                            ...state.previewsData,
                            topTrending: action.payload.previewsData
                        },
                        isPreviewsLoaded: true
                    }
                case 'top-rated':
                    return {
                        ...state,
                        previewsData: {
                            ...state.previewsData,
                            topRated: action.payload.previewsData
                        },
                        isPreviewsLoaded: true
                    }
                case 'top-popular':
                    return {
                        ...state,
                        previewsData: {
                            ...state.previewsData,
                            topPopular: action.payload.previewsData
                        },
                        isPreviewsLoaded: true
                    }
                default:
                     return {
                        ...state
                    }
            }
        case catalogPreviewActionTypes.FETCH_PREVIEWS_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case catalogPreviewActionTypes.CLEAR_PREVIEW_TITLES:
            return {
                ...INITIAL_STATE
            }
        default: 
            return {
                ...state
            }
    }
}

export default catalogPreviewReducer;