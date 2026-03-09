const express = require("express");

const app = express();


app.get("/check-prime", (req, res) => {
  const { number } = req.query;

  
  if (!number || isNaN(number)) {
    return res.status(400).json({ error: "Please provide a valid number" });
  }

  const num = parseInt(number);

  if (num <= 1) {
    return res.json({ number: num, isPrime: false });
  }

  
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  res.json({ number: num, isPrime });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log("http://localhost:3000/check-prime?number=17");
});
