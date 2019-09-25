const express = require('express');
const router = express.Router();
const Quotes = require('../models/quotes');



//Quotes POST
router.post('/', async(req, res) => {
	try{
		const createdQuote = await Quotes.create(req.body);
		res.json({
			success: true
		});
		console.log("Created quote: " + createdQuote);
	}catch(error){
		res.json({
			success: false
		});
		console.log(error, '<-- error in create quotes route')
	}	
});



//Quotes index
router.get('/', async(req,res) =>
{
	try
	{
		const foundQuotes = await Quotes.find({});
		res.json(foundQuotes);
		console.log("Quotes INDEX");
	}
	catch(err)
	{
		console.log(err);
		res.send(err);
	}
});






//DELETE for quotes:
router.delete('/:id', (req,res) =>
{
	Quotes.findByIdAndDelete(req.params.id, (err, deletedQuote) =>
	{
		if (err)
		{
			console.log(err);
			res.json({
				success: false
			});
		}
		else
		{
			console.log("Deleted a quote: " + deletedQuote.text);
			res.json({
				success: true
			});
		}
	});
});





//CLEAR for quotes:
router.delete('/', (req, res) =>
{
	Quotes.remove({}, (err) =>
	{
		if (err)
		{
			console.log(err);
			res.json(
			{
				success: false
			})
		}
		else
		{
			res.json(
			{
				success: true
			});
		}
	})
});



module.exports = router;