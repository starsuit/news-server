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
  res.writeHead(200, { "content-type": extensionType[extension] });
  res.end();
};

module.exports = {
  handlePublic
};
