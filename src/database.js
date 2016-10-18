'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Mean-todo', function(err){
	if(err){
		console.log('Failed conneting to Mongodb!')
	}else{
		console.log('Succesfull')
	}
});

