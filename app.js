require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const profileRoutes = require("./routes/catRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/me", profileRoutes);

app.get("/", (req, res) => {
  res.send("welcome to the cat's api calling");
});

// fallback route
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "route not found",
  });
});

// error handling
app.use((err, req, res, next) => {
  console.error("Server Error: ", err.message);
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

// server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
