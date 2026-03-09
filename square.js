const express = require("express");

const app = express();


app.get("/square", (req, res) => {
  const { number } = req.query;

  
  if (!number || isNaN(number)) {
    return res.status(400).json({ error: "Please provide a valid number" });
  }

  const num = parseFloat(number);
  const square = num * num;

  res.json({ number: num, square: square });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log("http://localhost:3000/square?number=25");
});
