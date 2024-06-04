const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../service/auth");
async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  const userFound = await User.findOne({ email, password });
  if (!userFound)
    return res.render("signin", {
      error: "user not found",
    });
  console.log(userFound, "userFound");
  const sessionId = uuidv4();
  setUser(sessionId, userFound);
  res.cookie("uid", sessionId);
  return res.redirect("/");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
