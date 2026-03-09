const express = require("express");

const app = express();
const PORT = 3000;

// Conversion rate
const RATE = 75;

// Web service endpoint
app.get("/convert", (req, res) => {

    const { rupees } = req.query;

    if (!rupees) {
        return res.json({ error: "Please provide rupees amount" });
    }

    const usd = (rupees / RATE).toFixed(2);

    res.json({
        rupees: rupees,
        dollars: usd
    });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Example: http://localhost:3000/convert?rupees=75`);
});