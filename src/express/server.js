const express = require('express')
const dotenv = require('dotenv')
var routes = require('./routes')
const app = express()

dotenv.config();
let EXPRESS_PORT = process.env.EXPRESS_PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.listen(EXPRESS_PORT, () => {
  console.log(`Server listening at http://localhost:${EXPRESS_PORT}`)
})

module.exports = app;

/*(
    function () {
        "use strict";
        let express = require('express');
        let app = express();
        app.get('/', function (req, res) {
            res.json({"status": "ok"});
        });
        let server = app.listen(3000, function () {
            console.log('Express server listening on port ' + server.address().port);
        });
        module.exports = app;
    }()
);*/