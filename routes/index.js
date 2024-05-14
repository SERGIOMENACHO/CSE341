const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.getPerson)

routes.use("/", require("./contacts"))

module.exports = routes;