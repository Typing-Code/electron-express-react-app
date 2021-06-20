const express = require('express')
const dotenv = require('dotenv')
const routes = require('./routes')
const app = express()
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3000
app.listen(EXPRESS_PORT, () => {
  console.log(`Server listening at http://localhost:${EXPRESS_PORT}`)
})

module.exports = app;