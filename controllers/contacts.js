const Contact = require("../modules/contact");

// get the list of all contacts
const getAllContacts = async (req, res, next) => {
  Contact.find()
    .then((allContacts) => {
      res.status(200).json(allContacts);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// get a specific contact with an id
const getOneContact = async (req, res, next) => {
  const contactId = req.params.id;
  Contact.find({_id: contactId})
  .then((contact) => {
    res.status(200).json(contact);
  })
  .catch((err) => {
    res.status(500).json({ error: err });
  });
};

module.exports = { getAllContacts, getOneContact };
