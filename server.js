const express = require("express");
const app = express();
// app.listen(3000, function () {
//   console.log("Server is listening on port 3000. Ready to accept requests!");
//   app.get("/", function (req, res) {
//     res.send("Hello World!");
//   });
// });


app.get("/", function (req, res) {
  res.send("Yay Node!");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

// app.get("/chocolate", function (req, res) {
//   res.send("Mm chocolate :O");
// });


//Detect Query Parameters
app.get("/", function (req, res) {
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
});
app.get("/chocolate", function (req, res) {
  let searchQuery = req.query.amount;
  res.send("Hello World! You searched for " + searchQuery);
});

//Multiple Query Parameters

app.get("/json", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});

//We can send send request to https://api.sunrise-sunset.org/json?lat=51.5311&lng=0.0481


/*EXERCISE
Add some code so that your server takes 2 values that we will multiply together and return the value For example

http://localhost:3000/multiply?value1=4&value2=5

This should return value of 20 */

// app.get("/multiply", function (req, res) {
//   let v1= req.query.value1;
//   let v2 = req.query.value2;
//   res.send(`You searched for value1: ${v1} and value2: ${v2}`);
// });

app.get("/multiply", function (req, res) {
  let v1 = req.query.value1;
  let v2 = req.query.value2;
  let v3 = req.query.value3;
  let v4 = req.query;
  let v5 = req;
  res.send(`You searched for value1: ${v1} and value2: ${v2}`);
  console.log(v5);
  console.log(v4);
  console.log(v1);
  console.log(v2);
  console.log(v3);
});

// Week-2
// EXERCISE
// 1. In server.js Add the endpoint for GET /albums.
const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "12",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", function (req, res) {
  res.send({albumsData});
});

// 2. Test the endpoint with Postman. GET /albums should return
// a JSON reply with the array we specified.
// 3. Add another item to the array and test that the GET /albums returns three items. 


// app.get("/albums/:albumId", function (req, res) {
//   // req.params.albumId will match the value in the url after /albums/
//   console.log(req.params.albumId);
//   // now we can use the value for req.params.albumId to find the album requested
//   // how do we "find" something in an array

//   // finish the code yourself - it should end with res.send(album) where album is the single album you found  based on the id
// });

app.get("/albums/:albumId", function (req, res) {
  // req.params.albumId will match the value in the url after /albums/
  console.log(req.params.albumId);

  // now we can use the value for req.params.albumId to find the album requested
  const albumId = req.params.albumId;
  const album = albumsData.find((a) => a.albumId === albumId);

  // check if the album exists in the array
  if (!album) {
    res.status(404).send("Album not found");
  } else {
    // send the album as a response
    res.send(album);
  }
});
