const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

async function fetchThoughts(req, res) {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

async function getThought(req, res) {
    try {
        const thought = await Thought.findOne({_id: req.params.thoughtID});
        if (!thought) {
            return res.status(404).json({message: 'Thought not found'});
        }
        res.json(thought);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

async function createNewThought(req, res) {
    try {
        const newThought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userID },
            { $push: { thoughts: newThought._id } },
            { new: true }
        );
        res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

async function modifyThought(req, res) {
    try {
        const updatedThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtID },
            { $set: req.body },
            { new: true }
        );
        if (!updatedThought) {
            return res.status(404).json({ message: 'Update failed' });
        }
        res.json(updatedThought);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}



