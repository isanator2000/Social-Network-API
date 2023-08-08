const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },
    friends:[{
          type: Schema.Types.ObjectId,
          ref: "User",
        }],
    thoughts:[{
        type: Schema.Types.ObjectId,
        ref: "thought",
        }],
    }, {
        toJSON: {
            virtuals: true,
        },
        id: false,
});

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });
  
const user = model("user", userSchema);
  
module.exports = user;