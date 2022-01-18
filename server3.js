const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

const htmlPath = (file) => `${__dirname}/server3-files/${file}.html`;

app.get("/nacktschnecke", (req, res) => {
  res.status(200).sendFile(htmlPath("nacktschnecke"));
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(htmlPath("about"));
});

app.use(function (req, res) {
  res.status(404).send("404. Resource not found");
});

try {
  app.listen(PORT);
  console.log(`Listening on http://localhost:${PORT}`);
} catch (err) {
  console.log(err);
}
