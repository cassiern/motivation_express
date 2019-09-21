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
app.use('/home', homeController)





app.get('/', (req, res) =>{
	res.render('index.js');
})