"use strict";

const massive = require("massive");
const config = require("./config");

const db = massive.connectSync({
  connectionString: config.connectionString,
});

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/logs", function(req, res) {
  if (req.body.message && req.body.level) {
    db.saveDoc("logs", req.body, err => {
      if (err) {
        console.error(err);
      }
    });
  }

  if (config.loglevel === "verbose") console.log(req.body);

  res.status(200).end();
});

app.listen(config.port, function() {
  console.log("Log server listening on port", config.port);
});
