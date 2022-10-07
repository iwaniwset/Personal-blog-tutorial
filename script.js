const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'one-piece-manga.p.rapidapi.com'
  }
};

fetch('https://one-piece-manga.p.rapidapi.com/list', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));