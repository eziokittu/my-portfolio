const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
	title: {type: String, required: true },
	description_short: {type: String, required: true },
	description_long: {type: String, required: true },
	project_type: {type: mongoose.Types.ObjectId, required: true, ref: 'ProjectTypes'},
	tags: { type: [String], default: [] },
  image: { type: [String], default: [] },
	createdAt: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Project', projectSchema);