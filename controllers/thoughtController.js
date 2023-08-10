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



