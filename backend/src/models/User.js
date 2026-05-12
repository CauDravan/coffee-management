import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  street: String,
  city: String
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    phone: String,

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },

    addresses: [addressSchema]
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", userSchema);