const express = require("express");
const path = require("path");

const urlRoute = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/user");
const cookieParser = require("cookie-parser");
const { restrictToLoggedinUserOnly } = require("./middlewares/auth");
const URL = require("./models/URL");

const { connectToMongoDB } = require("./connect");

connectToMongoDB("mongodb://127.0.0.1:27017/short-url");

const app = express();
const PORT = 1010;
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", staticRouter); // for views
app.use("/url", restrictToLoggedinUserOnly, urlRoute); // for operations
app.use("/user", userRouter);
// app.get("/test", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render("home", {
//     urls: allUrls,
//   });
// });

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
