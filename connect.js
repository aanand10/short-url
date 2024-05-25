const mongoose = require("mongoose");

async function connectToMongoDB(dbLink) {
  mongoose
    .connect(dbLink)
    .then(() => console.log("SHort-url app connected with mongoDB"))
    .catch((err) => console.log(err));
}

module.exports = { connectToMongoDB };
