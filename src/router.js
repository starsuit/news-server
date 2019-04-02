const handlers = require("./handlers");

const router = (req, res) => {
  if (req.url == "/") {
    handlers.handleHome(req, res);
  } else if (req.url.includes("/public/")) {
    handlers.handlePublic(req, res);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404: not found");
  }
};

module.exports = router;
