import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionTitlesArray, selectIsModalHidden } from '../../redux/collection/collection.selectors';

import EditModal from '../../components/edit-modal/edit-modal.component';
import Backdrop from '../../components/backdrop/backdrop.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

function CollectionPage({ collectionTitlesArray, isModalHidden }) {
    const mappedCollectionItems = collectionTitlesArray.sort((a, b) => b.assesment - a.assesment).map(({ id, ...otherProps }) => <CollectionItem key={id} item={{...otherProps, id}} />)

    return (
        <div className="collection-page">
            <h1 className="title">Your collection</h1>
            <div className="collection-header">
                <div className="header-item anime-title">Anime title</div>
                <div className="header-item progress">Progress</div>
                <div className="header-item assesment">Assesment</div>
                <div className="header-item status">Status</div>
            </div>
            <ul className="collection">
                { collectionTitlesArray.length ? 
                    mappedCollectionItems
                    :
                   <p className="empty-alert">There's no titles in your collection yet :(</p>
                }
            </ul>
            { !isModalHidden && 
                <Backdrop>
                    <EditModal />
                </Backdrop>
            }
        </div>
    )
}

function mapStateToProps() {
    return createStructuredSelector({
        collectionTitlesArray: selectCollectionTitlesArray,
        isModalHidden: selectIsModalHidden
    })
}

export default connect(mapStateToProps)(CollectionPage);