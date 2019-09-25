const Actions = require('../models/actions');
const express = require('express');
const router = express.Router();


//POST for actions
router.post('/', async(req, res) => {
	try{
		console.log("Trying to create action");
		console.log(req.body);
		// console.log(req.body.action);
		// console.log(req.body.category);
		// console.log(req.body.timeOfDay);
		const createdAction = await Actions.create(req.body);
		res.json({
			success: true
		});
		console.log("Created action: " + createdAction);
	}catch(error){
		res.json({
			success: false
		});
		console.log(error, '<-- error in create actions route')
	}	
});

//Actions index
router.get('/', async(req,res) =>
{
	try
	{
		const foundActions = await Actions.find({});
		res.json(foundActions);
		console.log("Actions INDEX");
	}
	catch(err)
	{
		console.log(err);
		res.send(err);
	}
});



//DELETE for actions:
router.delete('/:id', (req,res) =>
{
	Actions.findByIdAndDelete(req.params.id, (err, deletedAction) =>
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
			console.log("Deleted an action: " + deletedAction.text);
			res.json({
				success: true
			});
		}
	});
});

module.exports = router;