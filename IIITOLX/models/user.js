var mongoose = require("mongoose");
var plm = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: {type: Boolean, default: false}
});

userSchema.plugin(plm);
module.exports = mongoose.model("User", userSchema);