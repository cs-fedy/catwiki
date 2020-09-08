const { getBreedsUrl, catApiKey } = require("../constants");
const fetch = require("node-fetch");
const getURL = (baseUrl, params) => {
    const qs = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');
    return `${baseUrl}?${qs}`;
}

const getImage = async id => {
    const url = getURL(getBreedsUrl, {
        api_key: catApiKey,
        breed_ids: id
    });
    const res = await fetch(url);
    return await res.json();
}

const formatData = cats => {
    return cats.map(async ({ id, name, description, origin, cfa_url, wikipedia_url, temperament }) => {
        const [image] = await getImage(id);
        return {
            id,
            name,
            description,
            origin,
            cfa_url,
            wikipedia_url,
            temperament,
            imageURL: image.url
        };
    });
}

module.exports = {
    getURL, formatData
}