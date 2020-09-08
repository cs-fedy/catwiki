require("dotenv").config();
const port = process.env.port || 4000;
const catApiKey = process.env.catApiKey || "";
const breedsApiURL = "https://api.thecatapi.com/v1/breeds";
const searchBreedsApiURL = "https://api.thecatapi.com/v1/breeds/search";
const getBreedsUrl = " https://api.thecatapi.com/v1/images/search"
module.exports = { 
    port, 
    breedsApiURL, 
    catApiKey, 
    searchBreedsApiURL,
    getBreedsUrl }