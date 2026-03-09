const express = require("express");

const app = express();
const PORT = 3000;


app.get("/convertTemp", (req, res) => {

    const fahrenheit = req.query.f;

    if (!fahrenheit) {
        return res.json({ message: "Please provide temperature in Fahrenheit" });
    }

    
    const celsius = ((fahrenheit - 32) * 5/9).toFixed(2);

    res.json({
        Fahrenheit: fahrenheit,
        Celsius: celsius
    });

});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Example: http://localhost:3000/convertTemp?f=98`);
});