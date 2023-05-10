require("dotenv").config();
const mongoose = require("mongoose");

const docsSchema = new mongoose.Schema({
	owner: { required: true, type: String },
	title: { required: true, type: String },
	thumbnail: { required: false, type: String },
	last_modified: { required: false, type: Date },
	last_opened: { required: false, type: Date },
	file_id: { required: true, type: String },
});

module.exports = mongoose.model("Doc", docsSchema);
