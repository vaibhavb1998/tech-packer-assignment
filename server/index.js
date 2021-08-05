const express = require("express");
const cors = require("cors");
require("dotenv").config();

// import api routes
const templates = require("./api/templates/routes");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// cors
app.use(cors());

app.get("/ping", (req, res) => res.send("pong"));

// routes
app.use("/api/templates", templates);

// backend server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server up and running on port ${port}!`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

module.exports = app;
