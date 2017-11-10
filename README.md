# Online Logging Server

Log bod is an online logging server. In it's initial version, log messages can be posted in JSON format via http and will be written to a postgres database.

The future roadmap could include alternative log sinks and support for websockets.

## Installation
Ensure yarn is installed and restore required packages with

```bash
yarn
```

### Database

An instance of postgresql should be running and a table created called 'logs'. The only schema requirements are that columns should be created called message and level.

## Usage

The following environment variables can be set:

```
LOGBOD_PORT  #The bind port for the http server
LOGBOD_DATABASE_URL #Connection string for the postgres instance
```
Then when the environment is configured, run:

```bash
yarn start
```

Json messages can now be posted to the configured port (default 3001). For example

```bash
curl -H "Content-Type: application/json" -X POST \ 
	-d '{"message":"hello world","level":"1"}' \
	http://localhost:3001/logs
```


