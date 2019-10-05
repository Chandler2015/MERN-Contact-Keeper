const express = require("express");
const router = express.Router();

//@route GET api/contacts
//@desc  get all users contacts
//@access private
router.get("/", (req, res) => {
  res.send("get all contacts");
});

//@route POST api/contacts
//@desc  add new contact
//@access Public
router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route PUT api/contacts/:id
//@desc  update a user
//@access Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route DELETE api/contacts/:id
//@desc  update a user
//@access Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
