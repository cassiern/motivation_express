const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotesSchema = new Schema({
	quote: String,
	author: String,
	category: String
})

module.exports = mongoose.model('Quotes', quotesSchema)