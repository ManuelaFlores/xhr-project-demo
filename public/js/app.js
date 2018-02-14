// definiendo las constantes y variables a utilizar :
const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

// agregando el evento 'submit'
form.addEventListener('submit', function(event) {
  event.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();
});

// definiendo la función getNews:
function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=387ed84a52fb440d8467fa20eeb9319e`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

// definiendo la funcion handleError:
function handleError() {
  console.log('Se ha presentado un error');
};

// definiendo la función addNews();
function addNews() {
  const data = JSON.parse(this.responseText);
  console.log(data);
  const article = data.response.docs[0];
  console.log(article);
  const title = article.headline.main;
  console.log(title);
  const snippet = article.snippet;
  console.log(snippet);
  let ul = document.querySelector('.ul-js');
  let template = `<li class="articleClass col-12 border">
  <h3 class="text-left">${title}</h3>
  <p class="text-justify">
   ${snippet}
  </p>
</li>`; 
  ul.innerHTML = template;
};
