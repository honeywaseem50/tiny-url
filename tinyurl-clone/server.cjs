const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const urls = {};

app.post("/api/shorten", (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      message: "URL is required",
    });
  }

  const code = Math.random().toString(36).substring(2, 8);

  urls[code] = url;

  res.json({
    shortUrl: `http://localhost:5000/${code}`,
  });
});

app.get("/:code", (req, res) => {
  const originalUrl = urls[req.params.code];

  if (!originalUrl) {
    return res.status(404).send("URL not found");
  }

  res.redirect(originalUrl);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});