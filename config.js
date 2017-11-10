"use strict";

const port = process.env.LOGBOD_PORT || 3001;
const loglevel = process.env.LOGBOD_LOGLEVEL || "verbose";
const connectionString = process.env.LOGBOD_DATABASE_URL;

module.exports = {
  connectionString: connectionString,
  port: port,
  loglevel: loglevel,
};
