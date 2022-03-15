const crawler = require('../services/crawler')

class CrawlerController
{
    constructor()
    {
        this.crawler = crawler
    }

    search(req, res, next)
    {
        const { type, country } = req.query
        return this.crawler.search(type, country)
            .then((result) => res.json(result))
            .catch((error) => next(error));
    }

}

module.exports = new CrawlerController()