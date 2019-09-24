const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionSchema = new Schema({
	action: String,
	category: String,
	timeOfDay: String
});


const Actions = mongoose.model('Actions', actionSchema)
module.exports = Actions;