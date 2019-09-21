const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/motivation';
mongoose.connect(connectionString,
	{useNewUrlParser: true,
		userCreateIndex: true});
mongoose.connection.on('connect', ()=> {
	console.log(`mongoose connected to ${connectionString}`)
})
mongoose.connection.on('disconnect', ()=>{
	cnisole.log(`mongoose disconnected to ${connectionString}`)
})
mongoose.connection.on('error', (err)=>{
	console.log(`mongoose error: ${err}`)
})