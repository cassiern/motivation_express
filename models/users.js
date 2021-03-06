const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
	{
	  username: {
	    type: String,
	    required: true,
	    unique: true
	  },
	  usertype:	{
	  	type: String,
	  	required: true
	  },
	  email: {
	    type: String,
	    required: true
	  },
	  password: {
	    type: String,
	    required: true
	  },
	  displayname: {
	    type: String,
	    required: true
	  },
	  timeSelected: [{
	  	type: String,
	  	required: true
	  }],
	  categoriesSelected: [{
	  	type: String,
	  	required: true
	  }]
	}
);

const Users = mongoose.model('Users', userSchema)

module.exports = Users;