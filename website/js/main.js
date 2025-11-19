function randomJoke() {
  const jokes = Array.from(document.querySelectorAll('p'));
  const joke = jokes[Math.floor(Math.random()*jokes.length)].innerHTML;
  alert("Random Joke:\n\n" + joke);
}
