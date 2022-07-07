import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

//Crear la app
const app = express();

//Habilitar el template engine
app.set("view engine", "pug");
app.set("views", "./views");

//Archivos estaticos / Carpeta Publica
app.use(express.static("public"));

//Routing
app.use("/auth", usuarioRoutes);

//Definir un puerto y arrancar el proyecto;
const port = 3000 || "";
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
