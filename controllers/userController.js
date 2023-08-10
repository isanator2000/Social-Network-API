const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

async function getUsers(req, res) {
    try {
      const users = await User.find().populate('thoughts');
      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async function getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userID }).populate('thoughts');
      if (!user) {
        return res.status(404).json({message: 'User not found with this ID'});
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  