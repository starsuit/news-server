const fs = require("fs");
const path = require("path");
const url = require("url");

const handleHome = (req, res) => {
  fs.readFile(
    path.join(__dirname, "..", "public", "index.html"),
    (error, file) => {
      if (error) {
        console.log(error);
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>500: server error</h1>");
      } else {
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(file);
      }
    }
  );
};

const handlePublic = (req, res) => {
  const extension = req.url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpeg",
    png: "image/png",
    ico: "image/x-icon",
    TTF: "font/ttf"
  };

  fs.readFile(path.join(__dirname, "..", req.url), (error, file) => {
    if (error) {
      console.log(error);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>500: server error</h1>");
    } else {
      res.writeHead(200, {
        "Content-Type": extensionType[extension]
      });
      res.end(file);
    }
  });
};

module.exports = {
  handleHome,
  handlePublic
};
