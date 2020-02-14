const categories = document.querySelectorAll("[data-tag]");

const query = window.location.search.substring(1);
const searchPrompt = document.querySelector('#search-prompt');

let prompt = `Search for ${query} by typing it into the search bar`;

searchPrompt.innerHtml = prompt;
