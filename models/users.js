const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
	{
	  username: {
	    type: String,
	    required: false,
	    unique: true
	  },
	  usertype:	{
	  	type: String,
	  	required: false
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
	    required: false
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