const express = require("express");
const path = require("path");

const urlRoute = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/user");

const URL = require("./models/URL");

const { connectToMongoDB } = require("./connect");

connectToMongoDB("mongodb://127.0.0.1:27017/short-url");

const app = express();
const PORT = 1010;
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRoute); // for operations
app.use("/", staticRouter); // for views
app.use("/user", userRouter);
// app.get("/test", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render("home", {
//     urls: allUrls,
//   });
// });

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
