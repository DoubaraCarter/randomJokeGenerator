const btn = document.getElementById('btn')
const url = 'https://icanhazdadjoke.com/'
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

async function getJoke() {
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.joke)

    const container = document.getElementById('main')
    const joke = data.joke;
    container.textContent = joke

}
btn.addEventListener('click', getJoke)
