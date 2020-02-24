import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentPage, selectSearchMode, selectModeSubtype } from '../../redux/catalog/catalog.selectors';
import { defaultPaginationOffset } from '../../utils';

import PaginationLink from '../pagination-link/pagination-link.component';

import './pagintaion.styles.scss';



function Pagination({ titlesCount, currentPage }) {
    const lastPage = Math.ceil(titlesCount / defaultPaginationOffset);

    function getPagesMinimum(lastPage) {
        const tempArr = [lastPage - 6, lastPage - 5, lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage];
        const pagesArr = tempArr.filter(item => item > 0);
        return pagesArr;
    }

    const getPagesArr = useCallback(
        () => {
        if (lastPage < 7) {
            return getPagesMinimum(lastPage);
        }
        if (currentPage < 4) return [1, 2, 3, 4, 5, 6, 7]
        if (currentPage > lastPage - 4) return [lastPage - 6, lastPage - 5, lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage ]
        return [ currentPage - 3, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, currentPage + 3 ]
        }, [currentPage, lastPage]
    ) 

    useEffect(() => {
        getPagesArr();
    }, [currentPage, getPagesArr])

    const paginationLinks = getPagesArr().map(pageIndex => <PaginationLink key={pageIndex} index={pageIndex} currentPage={currentPage} />)

    return (
        <div className="pagination">
            <PaginationLink offsetType="prev" currentPage={currentPage} />
            {paginationLinks}
            <PaginationLink offsetType="next" currentPage={currentPage} lastPage={lastPage} />
        </div>
    )
}


function mapStateToProps() {
    return createStructuredSelector({
        currentPage: selectCurrentPage,
        searchMode: selectSearchMode,
        modeSubtype: selectModeSubtype
    }) 
}


export default connect(mapStateToProps)(Pagination);