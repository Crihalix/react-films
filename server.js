const express = require("express");

const films = require("./routes/api/films");

const app = express();

// Use Routes
app.use("/api/films", films);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
