const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
require('./db/db');


const actionsController = require('./controllers/actions');
const quotesController = require('./controllers/quotes');
const homeController = require('./controllers/home');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))



//eventually hooking this up to React Native


app.use('/home', homeController);
app.use('/actions', actionsController);
app.use('/quotes', quotesController)



app.get('/', (req, res) =>{
	res.redirect('/home');
})

app.listen(3000, () => {
	console.log('your server is running...better go catch it')
})