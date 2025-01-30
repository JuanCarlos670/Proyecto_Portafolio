const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  const projects = [
    { title: "Proyecto 1", description: "Descripción del proyecto 1" },
  ];

  res.render("index", { projects });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
