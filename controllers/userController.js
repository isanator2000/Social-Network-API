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