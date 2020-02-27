import catalogPreviewActionTypes from './catalog-preview.types';

export function fetchPreviewsStart(previewType) {
    return {
        type: catalogPreviewActionTypes.FETCH_PREVIEWS_START,
        payload: previewType
    }
}

export function fetchPreviewsSuccess(previewType, previewsData) {
    return {
        type: catalogPreviewActionTypes.FETCH_PREVIEWS_SUCCESS,
        payload: {previewType, previewsData}
    }
}

export function fetchPreviewsFailure(error) {
    return {
        type: catalogPreviewActionTypes.FETCH_PREVIEWS_FAILURE,
        payload: error
    }
}
