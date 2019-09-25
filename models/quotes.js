const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotesSchema = new Schema({
	text: {type: String, required: true, unique: true},
	author: {type: String, required: true},
	category: [{type: String, required: true}]
})

module.exports = mongoose.model('Quotes', quotesSchema)