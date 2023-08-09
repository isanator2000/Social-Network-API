const mongoose = require("mongoose");
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },

    username: {
        type: String, 
        required: true
      },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    
    reactions:[reactionSchema]
    },

    {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    id: false,
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


const thought = model("thought", thoughtSchema);

module.exports = thought;