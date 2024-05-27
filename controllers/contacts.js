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
  Contact.find({ _id: contactId })
    .then((contact) => {
      res.status(200).json(contact);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Create a POST route for creating new contacts that returns the ID of the new contact and a 201 status
const createContact = async (req, res, next) => {
  // use the model to create a new contact
  const contact = new Contact({
    firstName: "Marco",
    lastName: "Andrew",
    email: "andrew@mail.com",
    favoriteColor: "purple",
    birthday: "27/05/1956",
  });

  contact
    .save()
    .then((createdContact) => {
      res.status(201).json(createdContact);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

// Create a PUT route for updating a contact that returns a 204 status
const updateContact = async (req, res, next) => {
  const contactId = req.params.id;

  // find the contact to update
  Contact.findOne({ _id: contactId })
    .then((contact) => {
      contact.firstName = "Bryan";
      contact.lastName = "Law";
      contact.email = "bryan@mail.com";
      contact.favoriteColor = "orange";
      contact.birthday = "06/12/1999";

      Contact.updateOne({ _id: contactId }, contact)
        .then((response) => {
          res.status(204).json({ message: "Contact Updated successfully" });
        })
        .catch((error) => {
          res.status(500).json({ error: error });
        });
    })

    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

// Create a DELETE route for deleting a contact that returns a 200 status
const deleteContact = async (req, res, next) => {
  const contactId = req.params.id;

  Contact.findOne({ _id: contactId })
    .then((contact) => {
      contact
        .deleteOne({ _id: contactId })
        .then((response) => {
          res.status(200).json({ message: "Contact Deleted successfully" });
        })
        .catch((error) => {
          res.status(500).json({ error: error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

module.exports = {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteContact,
};
