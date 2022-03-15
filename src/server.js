const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv")
dotenv.config()

const routes = require('./routes/index')

const server = express();
const port = process.env.PORT || 8000;

server.use(cors())

server.use(routes)

server.listen(port, function (err)
{
    if (err) console.log("❌ Error in server setup ❌")
    console.log("🔥 Server listening on Port", port, '🔥');

    server.get("/", function (req, res)
    {
        return res.send("<h1>API ON 🔥🔥🔥🔥</h1>")
    })
});

module.exports = server