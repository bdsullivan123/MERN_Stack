const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const MyProductRoutes = require("./routes/authors.routes");
MyProductRoutes(app);

app.listen(8000, () => console.log("Help, I'm being oppressed!"));
