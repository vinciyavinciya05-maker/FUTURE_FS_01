const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;


const frontendPath = path.join(__dirname, "..", "frontend");


app.use(express.static(frontendPath));


app.get("/", (req, res) => {
  const indexPath = path.join(frontendPath, "index.html");
  console.log("👉 Trying to serve:", indexPath);

  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("❌ Error sending file:", err);
      res.status(500).send("Error loading index.html");
    }
  });
});


app.use((req, res, next) => {
  console.log("📌 Request URL:", req.url);
  next();
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📂 Serving frontend from: ${frontendPath}`);
});
