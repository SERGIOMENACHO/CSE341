const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contact API Documentation",
    description: "Description",
  },
  host: "cse341-wq68.onrender.com",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/contacts.js"];

swaggerAutogen(outputFile, endpointFiles).then(() => {
  require("./server.js");
});
