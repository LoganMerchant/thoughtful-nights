const { Schema, Types, model } = require("mongoose");
const moment = require("moment");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "The reaction must have content to it.",
      maxlength: 280,
    },
    username: {
      type: String,
      required: "The username of the person reacting is required.",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (val) => moment(val).format("MMMM Do, YYYY"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "A thought must have text to it!",
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (val) => moment(val).format("MMMM Do, YYYY"),
    },
    username: {
      type: String,
      required: "The username of the person who had this thought is required.",
    },
    reaction: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
