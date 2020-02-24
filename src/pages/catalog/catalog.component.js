import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsTitlesLoaded } from '../../redux/catalog/catalog.selectors';

import Pagination from '../../components/pagination/pagination.component';
import CatalogItem from '../../components/catalog-item/catalog-item.component';
import Spinner from '../../components/spinner/spinner.component';

import './catalog.styles.scss';

function CatalogPage({ isTitlesLoaded, meta: { count: titlesCount }, data: titlesArr, catalogTitles }) {
    const windowWidth = window.innerWidth;
    const catalogItems = titlesArr.map(({ id, attributes }) => (<CatalogItem key={id} item={{...attributes, id, itemSize: windowWidth > 700 ? 'medium' : 'small'}} />))
    const catalogTitle = catalogTitles.modeTitle === 'genre' ? `Best off the ${catalogTitles.subtypeTitle} ${catalogTitles.modeTitle}` : `${catalogTitles.modeTitle}`;

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
        isTitlesLoaded: selectIsTitlesLoaded
    })
}

export default connect(mapStateToProps)(CatalogPage);