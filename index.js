const express = require("express");
const phones = require("./phones.json");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.listen(port, () => {
  console.log("server is running here", port);
});
