// const querystring = require("querystring");

const router = (req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Hello");
  } else if (req.url.includes("/public/")) {
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
    res.writeHead(200, { "content-type": extensionType[extension] });
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404: not found");
  }
};

module.exports = router;
