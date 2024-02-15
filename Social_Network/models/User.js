const mongoose = require("mongoose");
const {isEmail,contains}= require("validator");
const filter = require("../util/filter");

const UserSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "must minimum 6 characters"],
        maxlength: [30, " must maximum 30characters"],
        validate: {
          validator: (val) => !contains(val, " "),
          message: "must no espace",
        },
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "must emai adress valid"],
      },
      password: {
        type: String,
        required: true,
        minLength: [8, "must minimum 8 characters"],
      },
      biography: {
        type: String,
        default: "",
        maxLength: [250, "250 characters long"],
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );
  UserSchema.pre("save", function (next) {
    if (filter.isProfane(this.username)) {
      throw new Error("Username cannot contain bad-words");
    }
  
    if (this.biography.length > 0) {
      this.biography = filter.clean(this.biography);
    }
  
    next();
  });
  
  module.exports = mongoose.model("user", UserSchema);