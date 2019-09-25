const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

require('dotenv').config()

const app = express();


require('./db/db');


const actionsController = require('./controllers/actions');
const quotesController = require('./controllers/quotes');
const homeController = require('./controllers/home');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'))

app.use(express.static('public'));


//fix cors issues maybe?????
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(session(
{
	//TODO: what should this secret string be?
	secret: 'zvnoaiueroiqjwetnbucyvzlafmamspbpoiewtro809325jrenti5janlzx8v09qnm2lk3nrasd',	//process.env.sessionSecret,
	resave: false, //only save if there has been a change
	saveUninitialized: false, //only save if we have mutated the session - this is what should be done for logins
	logged: false,
}));


//The following function acts as middleware on ALL requests,
//and is intended to monitor the session object in order
//to make sure it's being made available to the ejs views,
//and also to make sure the user login information is being
//kept up to date!
app.use(function(req, res, next)
{
	if (req.session.loginAttempt){
		req.session.loginMessage = null
	} else {
		req.session.loginMessage = "Incorrect Username or Password"
	}
	if (!req.session.logged)
	{
		req.session.messages =
		{
			userwelcome: "You are not logged in"
		}
		req.session.userId = null;
		req.session.username = null;
		req.session.usertype = null;
	}
	res.locals.session = req.session;
	next();
});



//eventually hooking this up to React Native

app.use('/home', homeController);
app.use('/actions', actionsController);
app.use('/quotes', quotesController)



app.get('/', (req, res) =>{
	res.redirect('/home');
})






let port = process.env.PORT;
if (!process.env.PORT) {port = 3000;}


app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
})