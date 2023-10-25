//Dad Jokes
const jokeDiv = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener("click", loadJoke );

loadJoke();

sampledata = {
    "joke":"What did the mama bullet say to the daddy bullet? We're having a BB.",
    "likes" : 45
};
    
async function loadJoke() {

    const config = {
        headers : {
            Accept: "application/json"
        }
    };

    const result = await fetch("https://icanhazdadjoke.com", config);
    const data = await result.json();

    jokeDiv.innerHTML = data.joke;

}



// const QuoteDiv = document.getElementById("quote");
// const QuoteButton = document.getElementById("quoteBtn");

// QuoteButton.addEventListener("click", getapi );

// const api_url ="https://zenquotes.io/api/quotes/";

// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);

// loadquote();

// async function loadquote() {

//     const config = {
//         headers : {
//             Accept: "application/json"
//         }
//     };

//     const resultquote = await fetch("https://zenquotes.io/api/quotes/", config);
//     const dataquote = await resultquote.json();

//     QuoteDiv.innerHTML = dataquote.quote;

// }

