export function routeConverter(type, filterText) {
    const routes = {
        'top-popular': '?sort=popularityRank',
        'top-rated': '?sort=ratingRank',
        'top-trending': '?filter[status]=current&sort=popularityRank',
        'exact': `${filterText}`
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