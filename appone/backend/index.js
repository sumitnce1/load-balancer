const express = require("express");
const cors = require("cors");
const http = require("http");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "http://localhost";

// Enable CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Basic route
app.get("/", (req, res) => {
  res.send("This is App One API Running..!");
});

// Example route
app.get("/api/data", (req, res) => {
  res.json({ message: "This is App One." });
});

// Create an HTTP server
const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`App One Server is running on ${HOST}:${PORT}`);
});

// Handle server startup errors
server.on("error", (error) => {
  console.error("Error occurred, server can't start", error);
  process.exit(1);
});
