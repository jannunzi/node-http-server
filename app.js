import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Welcome!</h1>");
});
app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});
const port = process.env.PORT || 4000;
app.listen(port);
