export function addTitleToCollection(collectionTitles, titleToAdd) {
    
    const existingCollectionTitle = collectionTitles.find(title => title.id === titleToAdd.id);

    if (!existingCollectionTitle) {
        return [
            ...collectionTitles,
            {
                id: titleToAdd.id,
                title: titleToAdd.canonicalTitle,
                posters: titleToAdd.posterImage,
                assesment: 0,
                episodeCount: titleToAdd.episodeCount,
                episodesWatched: titleToAdd.episodeCount,
                status: 'Completed',
                personalNotes: ''
            }
        ]
    } else return collectionTitles;
}

export function changeCollectionTitle(collectionTitles, newTitleData) {
    const titleToChange = collectionTitles.find(title => title.id === newTitleData.id)
    const updatedTitle = {
        ...titleToChange,
        ...newTitleData
    }
    
    return [
        ...collectionTitles.filter(title => title.id !== newTitleData.id),
        updatedTitle
    ]
}
