import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSummaryData, selectIsSummaryDataLoaded } from '../../redux/summary/summary.selectors';
import { fetchSummaryStart, clearSummaryData } from '../../redux/summary/summary.actions';

import SummaryPage from './summary.component';
import Spinner from '../../components/spinner/spinner.component';

function SummaryContainer({ match: { params: { titleId } }, fetchSummaryStart, summaryData, isSummaryDataLoaded, clearSummaryData }) {

    useEffect(() => {
        fetchSummaryStart(titleId);

        return clearSummaryData
    }, [fetchSummaryStart, titleId, clearSummaryData])

    if(isSummaryDataLoaded) console.log(summaryData)

    return isSummaryDataLoaded ?  (
        <SummaryPage title={{...summaryData.data.attributes, id: titleId}} genresLink={summaryData.data.relationships.genres.links.related} />
    ) : <Spinner />
}

function mapStateToProps() {
    return createStructuredSelector({
        isSummaryDataLoaded: selectIsSummaryDataLoaded,
        summaryData: selectSummaryData
    })
}


function mapDispatchToProps(dispatch) {
    return {
        fetchSummaryStart: titleId => dispatch(fetchSummaryStart(titleId)),
        clearSummaryData: () => dispatch(clearSummaryData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);