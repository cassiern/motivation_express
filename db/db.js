const mongoose = require('mongoose');
//const connectionString = 'mongodb://localhost/motivation';

const connectionString = process.env.MONGODB_URI

//console.log("db.js loaded");


mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
//mongoose.connect(connectionString, {useNewUrlParser: true});


mongoose.connection.on('connected', ()=> {
	console.log(`mongoose connected to ${connectionString}`)
})
mongoose.connection.on('disconnected', ()=>{
	console.log(`mongoose disconnected to ${connectionString}`)
})
mongoose.connection.on('error', (err)=>{
	console.log(`mongoose error: ${err}`)
})