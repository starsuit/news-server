const handlers = require("./handlers");

const router = (req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Hello");
  } else if (req.url.includes("/public/")) {
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404: not found");
  }
};

module.exports = router;
