const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Actions = require('../models/actions');
const Quotes = require('../models/quotes');



router.get('/', (req, res) => {
	res.render('index.ejs')
})



router.post('/', (req, res) => {
	res.send('POST request made to home (why did you do that?)')
})

//POST for quotes
router.post('/', async(req, res) => {
	try{
		const createQuote = await Quotes.create(req.body)
		console.log(createQuote, '<-- created quote')
		res.redirect('/home')
	}catch(error){
		console.log(error, '<-- error in create quotes route')
		res.send(error)
	}
})
module.exports = router;