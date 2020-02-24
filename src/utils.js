export function routeConverter(type, titleId, filterText) {
    const routes = {
        'top-popular': '?sort=popularityRank',
        'top-rated': '?sort=ratingRank',
        'top-trending': '?filter[status]=current&sort=popularityRank',
        'text-filter': `&filter[text]=${filterText}`,
        'exact': `${titleId}`
    }
    
    return routes[type];
}

export function getTypeTitle(type) {
    const typeTitles = {
        'top-popular': 'Top by popularity',
        'top-rated': 'Top rated',
        'top-trending': 'Top trending'
    }

    return typeTitles[type];
}

export async function requestUrl(url) {
    const res = await fetch(url);
    return await res.json();
}

export const rootPath = 'https://kitsu.io/api/edge';

export const defaultPaginationOffset = 16;