const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

/* Database */

connectDB();

/* Middleware */

app.use(cors());

app.use(express.json());

/* Routes */

app.use("/api/contact", contactRoutes);

/* Home */

app.get("/", (req, res) => {
  res.send("Portfolio API Running...");
});

/* Server */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});