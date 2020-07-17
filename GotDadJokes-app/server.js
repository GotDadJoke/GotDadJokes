/*
YP
*/
const express = require('express') //web app framework
	   , bent = require('bent') // importing bent mini 



const getJSON = bent('json')    //using bent to get json objects from API
const api_url = 'https://icanhazdadjoke.com/' //  Public API for dad Jokes
const app = express()

app.use('/',express.static('public'))


//client
function getRadomJoke(){

	return getJSON(api_url)

}

function searchAll(){

	return getJSON(api_url+'search/')
	
}

function searchTerm(term){

 	return getJSON(api_url+'/search?term='+term)

}


//get method route
app.get('/random', async function(req, res) {  // routing 
	var obj  = await getRadomJoke()
	var joke = obj.joke
	console.log(obj) 
	res.send(joke)
})

/*app.get('/test', function(req, res){
	
	res.sendFile(__dirname + '/public/index.html')
	
})*/


app.listen(55,() => console.log('Listening on: 55'))
