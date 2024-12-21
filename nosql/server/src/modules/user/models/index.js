import mongoose, { Schema } from "mongoose";

const dataScheme = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Model = mongoose.model("User", dataScheme);

export default Model;
