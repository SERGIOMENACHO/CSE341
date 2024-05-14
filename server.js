const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then((success) => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log("Listening on port " + port);
});
