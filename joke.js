let jokeCount = 0;

async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        const data = await response.json();

        const joke = data.type === 'single' ? data.joke : `${data.setup} - ${data.delivery}`;
        
        document.getElementById('joke').innerText = joke;
        jokeCount++;
        document.getElementById('joke-count').innerText = jokeCount;
    } catch (error) {
        document.getElementById('joke').innerText = "Oops! Something went wrong. Please try again.";
    }
}

document.getElementById('generate-joke').addEventListener('click', fetchJoke);
document.getElementById('clear-joke').addEventListener('click', function() {
    document.getElementById('joke').innerText = "Click the button for a joke!";
    jokeCount = 0;
    document.getElementById('joke-count').innerText = jokeCount;
});
