var express = require("express");
var multer = require("multer");

var upload = multer({
  dest: "uploads/"
});

var app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.post("/process", upload.single("image"), function (req, res, next) {
  console.log("Request file 'image' field:");
  console.log(req.file);
  console.log("Request body:");
  console.log(req.body);
  res.writeHead(200);
  res.write('[{"type":"text", "content": "Success!"}]');
  res.end();
});

module.exports = app;