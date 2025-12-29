// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// dùng thư mục public làm static
app.use(express.static(path.join(__dirname, "public")));

// route test
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
