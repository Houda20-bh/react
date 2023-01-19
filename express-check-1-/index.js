const express = require('express');
const app= express();
const PORT =7000;
const path = require("path");
app.use(function (req, res, next) {
  const date = new Date();
  if (
    date.getDay >= 1 &&
    date.getDay <= 5 &&
    date.getHours >= 9 &&
    date.getHours <= 17
  ) {
    next();
  } else {
    res.status(404).sendFile(path.join(__dirname,"/My-app/404.html"));
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/My-app/index.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "/My-app/contact.html"));
});

app.get("/services", function (req, res) {
  res.sendFile(path.join(__dirname, "/My-app/services.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "/My-app/style.css"));
});

app.listen(PORT, ()=>{
    console.log(`our server is working lol ..${PORT}`)
});