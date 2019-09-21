const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/home', (req, res) => {
	res.render('index.ejs')
})