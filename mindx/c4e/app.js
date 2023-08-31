function httpGetAsync(theUrl, callback) {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      callback(xhr);
    }
  });

  xhr.open("GET", theUrl);
  xhr.setRequestHeader("X-RapidAPI-Key", "SIGN-UP-FOR-KEY");
  xhr.setRequestHeader("X-RapidAPI-Host", "famous-quotes4.p.rapidapi.com");

  xhr.send(data);
}

const currentPromise = new Promise((res, rej) => {
  httpGetAsync(
    "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2",
    res
  );
});

currentPromise.then((data) => {
  console.log(data);
});
