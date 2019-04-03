const http = require("http");
const hostname = process.env.hostname || "localhost";
const port = process.env.PORT || 4000;
const router = require("./router");

// console.log(process.env);

http.createServer(router).listen(port, hostname, () => {
  console.log(`Server running at port http://${hostname}:${port}`);
});
