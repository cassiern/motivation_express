const Users = require('../models/users');
const express = require('express');
const router = express.Router();


//POST for users (register route)
router.post('/', async(req, res) => {
	try{
		const createdUser = await Users.create(req.body);
		res.send(createdAction);
		console.log("Created user: " + createdUser);
	}catch(error){
		res.send(error)
		console.log(error, '<-- error in create users route')
	}	
});


module.exports = router;