const User = require("../models/user.model");
const { userResponse } = require("../utils/converUserObject");

exports.findAll = async (req, res) => {
  try {
    let users = await User.find({});
    if (users) {
      return res.status(200).send(users);
    }
  } catch (err) {
    return res.status(500).send("Internal Error");
  }
};

exports.findById = async (req, res) => {
  let id = req.params.userId;
  let user = await User.findOne({ userId: id });
  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ msg: "User not found" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    let id = req.params.userId;
    let updatedValue = req.body;
    let user = await User.findOneAndUpdate(
      { userId: id },
      {
        updatedValue
      }
    );

    if (user.length) {
      return res.status(200).send("user updated successfully");
    } else {
      return res.status(200).send("user not Found");
    }
  } catch (err) {
    return res.status(500).json('internal Error');
  }
};
