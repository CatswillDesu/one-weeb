import React, { useEffect, useState } from 'react';

import { rootPath, requestUrl, routeConverter, getTypeTitle } from '../../utils';
import CatalogItem from '../catalog-item/catalog-item.component';

import './mini-catalog.styles.scss';

function MiniCatalog({ type }) {
    const [catalog, setCatalog] = useState(null);

    useEffect(() => {
        async function getCatalog() {
            return requestUrl(`${rootPath}/anime${routeConverter(type)}&page[limit]=6&page[offset]=0&fields[anime]=id,posterImage,titles,canonicalTitle,startDate,averageRating,slug`)
        }
        
        getCatalog()
            .then(({ data }) => setCatalog(data))
    }, [type])

    const catalogItems = catalog ? catalog.map(({ id, attributes }) => <CatalogItem key={id} titleId={id} {...attributes} />) : null;
    const catalogTitle = getTypeTitle(type).toUpperCase();

    return (
        <div className="mini-catalog">
            <h2 className="title">{catalogTitle}</h2>
            <ul className="list">{catalogItems}</ul>
        </div>
    )
}

export default MiniCatalog;