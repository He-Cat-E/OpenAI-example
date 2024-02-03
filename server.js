const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const Api = require('./api');

const app = express();


const corsOpt = {
  origin: "*",
  credentials: true,
  exposedHeaders: "authorization",
  maxAge: 10 * 60,
};

app.use(cors(corsOpt));
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.use('/api', Api);

const port = 8080;
const server = http.createServer(app).listen(port, function () {
  console.log("Http server listening on port " + port);
});
