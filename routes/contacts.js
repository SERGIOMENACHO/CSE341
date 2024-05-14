const routes = require("express").Router()
const contactsController = require("../controllers/contacts")

routes.get("/contacts", contactsController.getAllContacts)

routes.get("/contacts/:id", contactsController.getOneContact)

module.exports = routes;