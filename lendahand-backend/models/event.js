const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String, required: true },
  t_event: {
    type: Number,
    required: true,
    enum: [0, 1, 2, 3],
    default: 0,
  },
  date: { type: Date },
  x_loc: { type: Number, required: true },
  y_loc: { type: Number, required: true },
  description: { type: String },
  host: { type: Schema.Types.ObjectId, ref: "User", required: true },
  attendants: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

//  Virtual for event url
EventSchema.virtual("url").get(function () {
  return `/events/${this._id}`;
});

module.exports = mongoose.model("Event", EventSchema);
