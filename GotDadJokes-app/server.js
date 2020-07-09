/*
	NodeJs app using Express
*/
const express = require('express')
		  , path = require('path')
		  , bent = require('bent')

const getJSON = bent('json')


var app = express()

app.use('/',express.static('public'))

// Client side
async function getRadomJoke(){
	let obj 

	try {
		obj= await getJSON('https://icanhazdadjoke.com/')	
	}
	catch (e){}
	
	return obj
}

async function searchAll(){

	let obj

	try{
		obj = await getJSON('https://icanhazdadjoke.com/search/')
	}
	catch(e){}

	return obj
}

async function searchTerm(term){

	let obj 

	try{
		obj = await getJSON('https://icanhazdadjoke.com/search?term='+term)
	}
	catch(e){}

	return obj
}


//Service Side
app.get('/random', async function(req, res) {
	var obj  = await getRadomJoke()
	var joke = obj.joke
	console.log(obj) 
	res.send("Random Dad Joke: "+joke)
})

app.get('/test', function(req, res){
	
	res.sendFile(__dirname + '/public/index.html')
})


app.listen(55,() => console.log('Listening on: 55'))
