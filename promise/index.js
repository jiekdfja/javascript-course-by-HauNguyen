function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

// httpGetAsync("https://picsum.photos/id/237/200/300", (data) => {
//   console.log(data);
//   document.querySelector(".img-1").setAttribute("src", data.responseURL);

//   httpGetAsync("https://picsum.photos/id/237/200/300", (data) => {
//     document.querySelector(".img-2").setAttribute("src", data.responseURL);
//   });
// });

const currentPromise = new Promise((res, rej) => {
  httpGetAsync("https://picsum.photos/id/237/200/300", res);
});

const promise1 = new Promise((res, rej) => {
  httpGetAsync("https://picsum.photos/id/237/200/300", res);
});

// currentPromise.then((data) => {

// });

currentPromise
  .then((data) => {
    document.querySelector(".img-1").setAttribute("src", data.responseURL);
    return promise1;
  })
  .then((data) => {
    document.querySelector(".img-2").setAttribute("src", data.responseURL);
  });
