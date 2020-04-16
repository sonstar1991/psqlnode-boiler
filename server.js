const express = require("express");
const bodyParser = require("body-parser");

//all routes here
const routes = require('./routes')



const app = express();

app.use(bodyParser.json());

//All routes here
app.use('/', routes)


//error handler
app.use((err, req, res, next) => {
  res.json(err);
});

//testing default routes
app.get("/", (req, res) => {
  res.status(200).send("default");
});

module.exports = app;
