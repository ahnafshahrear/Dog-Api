const mongoose = require("mongoose");

const dogSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	gender: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
});

const DogModel = new mongoose.model("Dog", dogSchema);

module.exports = DogModel;