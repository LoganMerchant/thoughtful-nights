const { Schema, Types, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "A unique username is required.",
      trim: true,
    },
    email: {
      type: String,
      required: "A valid email is required.",
      unique: true,
      match: /^([\w-]+)\@\w+\.\w+$/,
    },
    thoughts: [
      {
        type: Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
