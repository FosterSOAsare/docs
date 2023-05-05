require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	email: { required: true, type: String },
	password: { required: false, type: String },
	provider: { required: true, type: String },
	token: { required: false, type: String },
	image: { required: false, type: String, default: "" },
	refreshToken: { required: false, type: String },
	accessToken: { required: false, type: String },
});
userSchema.pre("save", async function (next) {
	// only hash the password if it has been modified (or is new) or it exists at al
	if (!this.password) return;
	if (!this.isModified("password")) return next();

	// hash password
	let newPass = await bcrypt.hash(this.password, 10);
	this.password = newPass;
});

userSchema.methods.comparePassword = async function (candidatePassword) {
	let res = await bcrypt.compare(candidatePassword, this.password);
	return res;
};
userSchema.methods.generateJWT = async function () {
	let res = await jwt.sign({ _id: this._id, email: this.email }, process.env.JWT_SECRET, { expiresIn: "30d" });
	this.token = res;
};
module.exports = mongoose.model("User", userSchema);
