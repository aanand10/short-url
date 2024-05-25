const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");

connectToMongoDB("mongodb://127.0.0.1:27017/short-url");

const app = express();
const PORT = 1010;
app.use(express.json());
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
