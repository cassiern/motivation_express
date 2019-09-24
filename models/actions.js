const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionSchema = new Schema({
	action: String,
	category: Number,
	timeOfDay: String
});


const Actions = mongoose.model('Actions', actionSchema)
module.exports = Actions;