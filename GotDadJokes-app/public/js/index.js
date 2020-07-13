//Currently not using the correct API. 
//https://icanhazdadjoke.com/
const api_url = 'https://sv443.net/jokeapi/v2/joke/Any'


async function findDadJokes(){

    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    if(!data.joke)
        document.getElementById("jokeLabelBtn").innerHTML = data.setup +" "+ data.delivery;
    else
        document.getElementById("jokeLabelBtn").innerHTML = data.joke;
    
}
