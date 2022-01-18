const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/mensaje", (req, res) => {
  const html = `<h1>El servidor funciona correctamente</h1>
    <p>Aquí iría el contenido del mensaje</p>`;

  res.status(200).send(html);
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
