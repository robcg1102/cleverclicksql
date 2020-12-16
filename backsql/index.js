const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mainRoutes = require("./routes/routes");
app.use("/api", mainRoutes);

app.listen(3001, () => {
  console.log("Conectado al puerto 3001");
});
