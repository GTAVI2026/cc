const express = require("express");

var app = express();


app.get("/add/:num_1/:num_2", function (req, res) {
  const num1 = req.params.num_1;
  const num2 = req.params.num_2;

  res.json({
    result: parseInt(num1) + parseInt(num2),
  });
});


app.get("/sub/:num_1/:num_2", function (req, res) {
  const num1 = req.params.num_1;
  const num2 = req.params.num_2;

  res.json({
    result: parseInt(num1) - parseInt(num2),
  });
});


app.get("/mul/:num_1/:num_2", function (req, res) {
  const num1 = req.params.num_1;
  const num2 = req.params.num_2;

  res.json({
    result: parseInt(num1) * parseInt(num2),
  });
});


app.get("/div/:num_1/:num_2", function (req, res) {
  const num1 = req.params.num_1;
  const num2 = req.params.num_2;

  res.json({
    result: parseInt(num1) / parseInt(num2),
  });
});

app.listen(3000, function () {
  console.log("The port is 3000");
  console.log("http://localhost:3000/add/2/3");
  console.log("http://localhost:3000/sub/2/3");
  console.log("http://localhost:3000/mul/5/20");
  console.log("http://localhost:3000/div/2/3");
});
