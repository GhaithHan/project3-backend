const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user-model.js");

const router = express.Router();


router.post("/signup", (req, res, next) => {
    const { firstName, lastName, email, originalPassword } = req.body;
  
    if (originalPassword === "" || originalPassword.match(/[0-9]/) === null) {
      // create an Error object for "next(err)"
      const err = new Error("Password can't be blank and must have a number");
      next(err);
      return;
  }

  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  User.create({ firstName, lastName, email, encryptedPassword })
    .then((userDoc) => {
      // log the user in immediately after signing up
      req.logIn(userDoc, () => {
        // hide encryptedPassword before sending the JSON (it's a security risk)
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/login", (req, res, next) => {
    const { email, loginPassword } = req.body;
  
    // check the email by searching the database
    User.findOne({ email })
      .then((userDoc) => {
        if (!userDoc) {
          // create an Error object for "next(err)"
          const err = new Error("Email not found");
          next(err);
          return;
  }

  const { encryptedPassword } = userDoc;
      if (!bcrypt.compareSync(loginPassword, encryptedPassword)) {
        const err = new Error("Wrong password");
        next(err);
        return;
}

req.logIn(userDoc, () => {
    // hide encryptedPassword before sending the JSON (it's a security risk)
    userDoc.encryptedPassword = undefined;
    res.json({ userDoc });
  });
})
.catch((err) => {
  next(err);
});
});

router.delete("/logout", (req, res, next) => {
    req.logOut();
    res.json({ userDoc: null });
  });

  router.get("/checklogin", (req, res, next) => {
    if (req.user) {
      // hide encryptedPassword before sending the JSON (it's a security risk)
      req.user.encryptedPassword = undefined;
    }
    res.json({ userDoc: req.user });
  });

  module.exports = router;