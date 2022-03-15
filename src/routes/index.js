const express = require('express');
const router = express.Router();
const crawlerController = require('../controllers/crawler.controller')

// ?all routes 
router
    .get('/crawler/search?', (req, res, next) => crawlerController.search(req, res, next))
// .get('/crawler/search?type=:typeName?country=:countryName', (req, res, next) => crawler.search(req, res, next))

module.exports = router;