const express = require("express");
const { palindrome } = require("./utils/palindrome");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/check/:slug", (req, res) => {
  let msg = "NO es un palíndromo";

  if (palindrome(req.params.slug)) {
    msg = "Es un palíndromo";
  }

  res.status(200).send(msg);
});

app.use(function (req, res) {
  res.status(404).send("No he encontrado lo que buscabas...");
});

try {
  app.listen(PORT);
  console.log(`Listening on http://localhost:${PORT}`);
} catch (err) {
  console.log(err);
}
