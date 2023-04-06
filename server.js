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

