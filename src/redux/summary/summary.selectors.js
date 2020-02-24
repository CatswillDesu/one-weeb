import { createSelector } from 'reselect';

const selectSummary = state => state.summary;

export const selectSummaryData = createSelector(
    selectSummary,
    summary => summary.summaryData
)

export const selectGenresData = createSelector(
    selectSummary,
    summary => summary.genresData
)

export const selectSummaryError = createSelector(
    selectSummary,
    summary => summary.summaryError
)

export const selectGenresError = createSelector(
    selectSummary,
    summary => summary.genresError
)

export const selectIsSummaryDataLoaded = createSelector(
    selectSummaryData,
    summaryData => !!summaryData
)

export const selectIsGenresDataLoaded = createSelector(
    selectGenresData,
    genresData => !!genresData
)

