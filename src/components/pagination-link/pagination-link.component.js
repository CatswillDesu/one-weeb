import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentPage } from '../../redux/catalog/catalog.actions'

import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';

import './pagination-link.styles.scss';

function PaginationLink({ index, currentPage, lastPage, offsetType, changeCurrentPage }) {

    let handleClick;

    if (offsetType === 'prev') {
        handleClick = () => {
            if (currentPage > 1) changeCurrentPage(currentPage - 1)
            else return
        }
    } else if (offsetType === 'next') {
        handleClick = () => {
            if (currentPage < lastPage) changeCurrentPage(currentPage + 1)
            else return
        }
    } else {
        handleClick = () => changeCurrentPage(index)
    }

    const activeStyle = index === currentPage ? 'pagination-link active' : 'pagination-link';
    const innerContent = offsetType === 'prev' ? <LeftArrow /> : offsetType === 'next' ? <RightArrow /> : index;

    return <button onClick={handleClick} className={`${activeStyle} ${offsetType}`}>{innerContent}</button>
}

function mapDispatchToProps(dispatch) {
    return {
        changeCurrentPage: pageIndex => dispatch(changeCurrentPage(pageIndex))
    }
}

export default connect(null, mapDispatchToProps)(PaginationLink);