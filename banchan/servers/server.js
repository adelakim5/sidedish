require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
const router = require("./routes/auth");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
