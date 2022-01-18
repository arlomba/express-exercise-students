const express = require("express");
const { isPalindrome } = require("palindrome-plus");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/check", (req, res) => {
  if (req.query.palabra) {
    let msg = "NO es un palíndromo";

    if (isPalindrome(req.query.palabra)) {
      msg = "Es un palíndromo";
    }

    res.status(200).send(msg);
    return;
  }

  res.status(200).send();
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
