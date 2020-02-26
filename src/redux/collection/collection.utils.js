export function addTitleToCollection(collectionTitles, titleToAdd) {
    
    const existingCollectionTitle = collectionTitles[titleToAdd.id];

    if (!existingCollectionTitle) {
        return {
            ...collectionTitles,
            [titleToAdd.id]: {
                id: titleToAdd.id,
                title: titleToAdd.canonicalTitle,
                posters: titleToAdd.posterImage,
                assesment: 0,
                episodeCount: titleToAdd.episodeCount ? titleToAdd.episodeCount : '—',
                episodesWatched: titleToAdd.episodeCount ? titleToAdd.episodeCount : '0',
                status: 'Completed',
                personalNotes: ''
            }
        }
    } else return collectionTitles;
}

export function changeCollectionTitle(collectionTitles, newTitleData) {
    const titleToChange = collectionTitles[newTitleData.id];
    const updatedTitle = {
        ...titleToChange,
        ...newTitleData
    }
    
    return {
        ...collectionTitles,
        [newTitleData.id]: updatedTitle
    }
}
