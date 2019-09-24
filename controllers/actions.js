const Actions = require('../models/actions');
const express = require('express');
const router = express.Router();


//POST for actions
router.post('/', async(req, res) => {
	try{
		const createdAction = await Actions.create(req.body);
		res.send(createdAction);
		console.log("Created action: " + createdAction);
	}catch(error){
		res.send(error)
		console.log(error, '<-- error in create actions route')
	}	
});


module.exports = router;