const routes = require("express").Router();
const contactsController = require("../controllers/contacts");

routes.get("/contacts", contactsController.getAllContacts);

routes.get("/contacts/:id", contactsController.getOneContact);

routes.post("/contacts/create", contactsController.createContact);

routes.put("/contacts/:id", contactsController.updateContact);

routes.delete("/contacts/:id", contactsController.deleteContact);

module.exports = routes;
