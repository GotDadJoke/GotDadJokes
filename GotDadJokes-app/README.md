# NodeJS App Version 1

## entry point: server.js

### Tools Needed For Deployment

- Nodejs
- npm

### Deployment Steps

1. Navigate to project directory in the CLI
2. Type command `npm install` if it's the first time using the app
3. Type command `node server` to run server app
4. If in local machine check your browser: http://127.0.0.1:55/  or http://localhost:55/
5. If in hosting service check: YOUR_URL:PORT  or YOUR_IP:PORT

#### Check on browser
- 127.0.0.1:55   //for static page
- 127.0.0.1:55/random  //for random joke
- 127.0.0.1:55/test   //just to test

### Integration with Icanhazdadjokes API

- Integrated API using bent which is a functional HTTP client for NodeJS
- Created asynchronous functions to fetch data from API: 
	- getRandomJoke() : returns a random joke json object
	- searchAll()     : returns all the jokes
	- searchTerm(term): returns jokes containing the term
	***Need to provide some validation for term it can only take alphanumeric***

### Project Structure
```
GotDadJokes-app
+-- server.js
+-- README.md
+-- package.json
+-- node_modules
+-- public
|	+-- index.html
|	+-- views
|	+-- js
|	|	+--index.js
|	+-- img
|	+-- css	
|	|	+-- styles.css
```
### Routing

#### get request
	app.get('/route', function(req, res) {
		//do something
	})

#### post request
	app.post('/route', function(req, res) {
		//do something
	})

