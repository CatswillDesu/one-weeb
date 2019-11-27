import React, { useState, useEffect } from 'react';

import { requestUrl, routeConverter, rootPath } from '../../utils';
import SummaryPage from './summary.component';
import Spinner from '../../components/spinner/spinner.component';

function SummaryContainer(props) {
    const [summaryData, setSummaryData] = useState(null);

    const titleId = props.match.params.titleId;

    useEffect(() => {
        requestUrl(`${rootPath}/anime/${routeConverter('exact', titleId)}`)
            .then(data => {
                setSummaryData(data);
            })
    }, [])

    return summaryData ?  (
        <SummaryPage {...summaryData.data.attributes} />
    ) : <Spinner />
}

export default SummaryContainer;