const api_url = '/random'

function findDadJokes(){

    fetch(api_url, { method: "get"})
    .then(data => {return data.text()})
    .then(res => {
        document.getElementById('jokeLabelBtn').innerHTML = res 
        console.log(res)})
}
