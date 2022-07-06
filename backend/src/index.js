const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const router = require("./router");
require("dotenv").config({ path: ".env" });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 4000);
db.connect(process.env.DB_CONNECT);

router(app);
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(app.get("port"), function () {
  console.log(
    `la aplicacion esta funcionado en http://localhost:${app.get("port")}`,
  );
});
