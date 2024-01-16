const express = require("express");
const phones = require("./phones.json");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

app.get("/phones", (req, res) => {
  res.send(phones);
});
//dynamic with id
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
  console.log("id is ", id);
});

app.listen(port, () => {
  console.log("server is running here", port);
});
