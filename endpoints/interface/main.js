// var http = require("http");
// var url = require("url");
// var fs = require("fs");

// http
//   .createServer(function (req, res) {
//     switch (req.url) {
//       case "/build/bundle.js":
//         res.writeHead(200, { "Content-Type": "application/javascript" });
//         fs.readFile("./public/build/bundle.js", function (err, data) {
//           res.write(data);
//           res.end();
//         });
//         break;

//       case "/build/bundle.css":
//         res.writeHead(200, {
//           "Content-Type": "text/css",
//         });
//         fs.readFile("./public/build/bundle.css", function (err, data) {
//           res.end(data);
//         });
//         break;

//       case "/images/portrait.jpg":
//         var stream = fs.createReadStream("./public/images/portrait.jpg");
//         res.writeHead(200, {
//           "Content-Type": "image/jpg",
//         });
//         stream.pipe(res);
//         break;

//       case "/global.css":
//         res.writeHead(200, {
//           "Content-Type": "text/css",
//         });
//         fs.readFile("./public/global.css", function (err, data) {
//           res.end(data);
//         });
//         break;

//       case "/":
//         res.writeHead(200, {
//           "Content-Type": "text/html",
//         });
//         fs.readFile("./public/index.html", function (err, data) {
//           res.end(data);
//         });
//         break;

//       case "/home":
//         res.writeHead(200, {
//           "Content-Type": "text/html",
//         });
//         fs.readFile("./public/index.html", function (err, data) {
//           res.end(data);
//         });
//         break;

//       case "/branding":
//         res.writeHead(200, {
//           "Content-Type": "text/html",
//         });
//         fs.readFile("./public/index.html", function (err, data) {
//           res.end(data);
//         });
//         break;
//     }
//   })
//   .listen(8080);

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = 8080;

const STATIC = path.resolve(__dirname, "public");
const INDEX = path.resolve(STATIC, "index.html");

const app = express();
app.use(bodyParser.json());

// Static content
app.use(express.static(STATIC));

// All GET request handled by INDEX file
app.get("*", function (req, res) {
  res.sendFile(INDEX);
});

// Start server
app.listen(PORT, function () {
  console.log("Server up and running on ", `http://localhost:${PORT}/`);
});
