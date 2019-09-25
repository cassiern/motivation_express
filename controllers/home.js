const express = require('express');
const router = express.Router();
const User = require('../models/users')
const Actions = require('../models/actions');
const Quotes = require('../models/quotes');



router.get('/', (req, res) => {
	res.render('index.ejs')
})



router.post('/', (req, res) => {
	res.send('POST request made to home (why did you do that?)')
})

router.get('/actions', (req, res) =>
{
	Actions.find({}, (err, foundActions) =>
	{
		res.render('actions.ejs', {actions: foundActions});
	});
});

router.get('/quotes', (req, res) =>
{
	Quotes.find({}, (err, foundQuotes) =>
	{
		res.render('quotes.ejs', {quotes: foundQuotes});
	});
});

module.exports = router;