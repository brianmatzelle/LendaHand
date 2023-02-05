const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  u_name: { type: String, required: true },
  password: { type: String, required: true },
  f_name: { type: String, required: true },
  l_name: { type: String, required: true },
  type0: { type: Number, required: true },
  type1: { type: Number, required: true },
  type2: { type: Number, required: true },
  type3: { type: Number, required: true },
  tot_time: { type: Number, required: true },
});

// make virtual for recommended time,
// sum of all events gone to, and recommended event

module.exports = mongoose.model("User", UserSchema);
