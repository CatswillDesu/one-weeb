import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCatalogMode, selectModeSubtype, selectIsTitlesLoaded, selectTitlesData } from '../../redux/catalog/catalog.selectors';
import { getTypeTitle } from '../../utils';

import Pagination from '../../components/pagination/pagination.component';
import CatalogItem from '../../components/catalog-item/catalog-item.component';
import Spinner from '../../components/spinner/spinner.component';

import './catalog.styles.scss';

function CatalogPage({ catalogMode, modeSubtype, isTitlesLoaded, titlesData: { meta: { count: titlesCount }, data: titlesArr }, catalogTitles, withSubtype }) {
    const windowWidth = window.innerWidth;
    const modeTitle = withSubtype ? catalogMode.slice(0, -1) : getTypeTitle(catalogMode).toUpperCase();
    const subtypeTitle = withSubtype ? modeSubtype.split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ') : '';
    const catalogItems = titlesArr.map(({ id, attributes }) => (<CatalogItem key={id} item={{...attributes, id, itemSize: windowWidth > 700 ? 'medium' : 'small'}} />))
    const catalogTitle = withSubtype ? `Best off the ${subtypeTitle} ${modeTitle}` : `${modeTitle}`;

    return (
        <div className="catalog-page">
            <h1 className="title">{catalogTitle}</h1>
            <Pagination titlesCount={titlesCount} />
            <ul className="list">{ isTitlesLoaded ? catalogItems : <Spinner/> }</ul>
            { isTitlesLoaded ? <Pagination titlesCount={titlesCount} /> : ''}
        </div>
    )
}

function mapStateToProps() {
    return createStructuredSelector({
        catalogMode: selectCatalogMode,
        modeSubtype: selectModeSubtype,
        isTitlesLoaded: selectIsTitlesLoaded,
        titlesData: selectTitlesData
    })
}

export default connect(mapStateToProps)(CatalogPage);