/*
YP
*/
const express = require('express') //web app framework
	   , bent = require('bent') // importing bent mini http client 



const getJSON = bent('json')    //using bent to get json objects from API
const api_url = 'https://icanhazdadjoke.com/' //  Public API for dad Jokes
const app = express()

app.use('/',express.static('public'))


//client side
function getRadomJoke(){

	return getJSON(api_url)

}

function searchAll(){

	return getJSON(api_url+'search')
	
}

function searchTerm(term){

 	return getJSON(api_url+'search?term='+term)

}


//get method route
app.get('/random', async function(req, res) {  // routing 
	let obj  = await getRadomJoke() // json object 
	let joke = obj.joke
	res.send(joke)
})

/*app.get('/test', function(req, res){
	
	res.sendFile(__dirname + '/public/index.html')
	
})*/


app.listen(55,() => console.log('Listening on: 55'))
