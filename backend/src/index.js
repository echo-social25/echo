require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const connectDB = require("../config/db");
require("../config/passport");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));