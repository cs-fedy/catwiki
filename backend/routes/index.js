const router = require("express").Router();
const fetch = require("node-fetch");
const { 
    breedsApiURL, 
    catApiKey, 
    searchBreedsApiURL } = require("../constants");
const { getURL, formatData } = require("../helpers/helpers");

router.get("/breeds", async (req, res) => {
    const url = getURL(breedsApiURL, {
        api_key: catApiKey
    });
    const catsResult = await fetch(url);
    const cats = await catsResult.json();
    const formattedData = await Promise.all(formatData(cats));
    return res.json({cats: formattedData})
});

router.get("/breeds/:name", async (req, res) => {
    const { name } = req.params;
    const url = getURL(searchBreedsApiURL, {
        q: name,
        api_key: catApiKey
    });
    const result = await fetch(url);
    const cats = await result.json();
    const formattedData = await Promise.all(formatData(cats));
    return res.json({cats: formattedData})
});

module.exports = router;