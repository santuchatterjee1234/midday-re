export function sanitizedUrl(category, subcategory, path, extraPath, id) {
    const sanitize = (text) => {
        if (typeof text !== 'string') return ''; // Check if the input is a string, return empty string if not
        return text.replace(/[^\w\s-]/g, '-').replace(/\s+/g, '-').toLowerCase();
    };
    const sanitizedCategory = sanitize(category);
    const sanitizedSubcategory = subcategory ? sanitize(subcategory) : '';
    const sanitizedExtraPath = extraPath ? sanitize(extraPath) : '';
    const sanitizedPath = sanitize(path);
    
    const sanitizedTitle = sanitizedPath.replace(/-+/g, '-');
    const sanitizedCategoryPath = sanitizedSubcategory 
        ? `${sanitizedCategory}/${sanitizedSubcategory}/${sanitizedExtraPath}` 
        : sanitizedCategory;

    const url = `/${sanitizedCategoryPath}/${sanitizedTitle}-${id}`;
    
    return url.replace(/-+/g, '-');
}

export function extractIdFromUrl(url) {
    const regex = /(?:\/|-)(\d+)(?!.*(?:\/|-)\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}