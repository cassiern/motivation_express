const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionSchema = new Schema({
	text: {type: String, required: true, unique: true},
	category: {type: String, required: true},
	timeOfDay: {type: String, required: true}
});


const Actions = mongoose.model('Actions', actionSchema)
module.exports = Actions;