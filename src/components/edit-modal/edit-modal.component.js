import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTitleToEdit, selectCollectionTitles, selectIsModalHidden } from '../../redux/collection/collection.selectors';
import { closeEditModal, removeTitleFromCollection, changeCollectionTitle } from '../../redux/collection/collection.actions';

import OptionalDropdown from '../optional-dropdown/optional-dropdown.component';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';
import { ReactComponent as BinIcon } from '../../assets/bin.svg';

import './edit-modal.styles.scss';

function EditModal({ titleToEdit, closeEditModal, isModalHidden, removeTitleFromCollection, collectionTitles, changeCollectionTitle }) {
    const { title, episodeCount, episodesWatched, assesment, personalNotes, status, id } = titleToEdit;
    const [ tempProgress, setTempProgress ] = useState(episodesWatched);
    const [ tempAssesment, setTempAssesment ] = useState(assesment);
    const [ tempStatus, setTempStatus ] = useState(status);
    const [ tempPersonalNotes, setTempPersonalNotes ] = useState(personalNotes);

    const changedData = { 
        episodesWatched: +tempProgress,
        assesment: +tempAssesment,
        status: tempStatus,
        personalNotes: tempPersonalNotes,
        id
     }

    function getChangeFunc(optionType) {
        const changeFunctions = {
            progress: setTempProgress,
            assesment: setTempAssesment,
            'personal-notes': setTempPersonalNotes
        }

        return changeFunctions[optionType];
    }

    function handleChange({ target }) {
        const { value } = target;
        const optionType = target.dataset.optionType;
        getChangeFunc(optionType)(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        closeEditModal();
        changeCollectionTitle({ collectionTitles, newTitleData: changedData });
    }

    useEffect(() => {
        if (!isModalHidden) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isModalHidden])

    return (
        <div className="collection-edit-modal">
            <div className="modal-header">
                <h3 className="anime-title">{title}</h3>
                <button className="close-button" onClick={() => closeEditModal()} ><CrossIcon /></button>
            </div>
            <form className="edit-form" onSubmit={handleSubmit}>
                <ul className="edit-options">
                    <li className="edit-option progress">
                        <span className="option-type">Progress</span>
                        <div className="option-input">
                            <input
                                type="number" 
                                min="0" 
                                max={+episodeCount ? episodeCount : '1000'} 
                                data-option-type="progress"
                                value={tempProgress} 
                                onChange={handleChange} 
                            />
                            <span className="progress-limit">{episodeCount ? episodeCount : '—'}</span>
                        </div>
                    </li>
                    <li className="edit-option assesment">
                        <span className="option-type">Assesment</span>
                        <input 
                            className="option-input" 
                            type="number" 
                            min="0" 
                            max="10"
                            data-option-type="assesment"
                            value={tempAssesment} 
                            onChange={handleChange} 
                        />
                    </li>
                    <li className="edit-option status">
                        <span className="option-type">Status</span>
                        <OptionalDropdown 
                            extraClass="option-input"
                            onChange={setTempStatus}
                            selectOptions={['Currently Watching', 'Want to watch', 'Completed', 'On Hold', 'Dropped']} 
                            defaultOption={tempStatus}
                        />
                    </li>
                    <li className="edit-option personal-notes">
                        <span className="option-type">Personal notes</span>
                        <textarea 
                            className="option-input" 
                            data-option-type="personal-notes"
                            value={tempPersonalNotes} 
                            onChange={handleChange}
                        />
                    </li>
                </ul>
                <div className="footer">
                    <button className="remove-title-button" onClick={() => {closeEditModal(); removeTitleFromCollection({ collectionTitles, titleToRemove: titleToEdit })}} ><BinIcon /></button>
                    <input className="save-changes-button" type="submit" value="Save changes" />
                </div>
            </form>
        </div>
    )
}

function mapStateToProps() {
    return createStructuredSelector({
        isModalHidden: selectIsModalHidden,
        titleToEdit: selectTitleToEdit,
        collectionTitles: selectCollectionTitles
    })
}

function mapDispatchToProps(dispatch) {
    return {
        closeEditModal: () => dispatch(closeEditModal()),
        removeTitleFromCollection: collectionData => dispatch(removeTitleFromCollection(collectionData)),
        changeCollectionTitle: collectionData => dispatch(changeCollectionTitle(collectionData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);