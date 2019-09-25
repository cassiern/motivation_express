const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/motivationLegit';

//console.log("db.js loaded");


mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect(connectionString, {useNewUrlParser: true});


mongoose.connection.on('connect', ()=> {
	console.log(`mongoose connected to ${connectionString}`)
})
mongoose.connection.on('disconnect', ()=>{
	console.log(`mongoose disconnected to ${connectionString}`)
})
mongoose.connection.on('error', (err)=>{
	console.log(`mongoose error: ${err}`)
})