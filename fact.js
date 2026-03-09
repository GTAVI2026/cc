const express = require("express");

const app = express();


app.get("/factorial", (req, res) => {
  const { number } = req.query;

  
  if (!number || isNaN(number)) {
    return res.status(400).json({ error: "Please provide a valid number" });
  }

  const num = parseInt(number);

  if (num < 0) {
    return res.status(400).json({ error: "Factorial is not defined for negative numbers" });
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  res.json({ number: num, factorial: factorial });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log("http://localhost:3000/factorial?number=5");
});
