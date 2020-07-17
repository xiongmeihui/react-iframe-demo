const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer();

server.listen(9000, function () {
  console.log("http server is listening at port 9000");
});

server.on("request", function () {
  console.log("收到客户发出的请求");
});

server.on("request", function (req, res) {
  const { url } = req;
  if (url === "/") {
    //response.writeHead(响应状态码，响应头对象): 发送一个响应头给请求。
    res.writeHead(200, { "Content-Type": "text/html" });
    // 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
    fs.readFile(path.resolve(__dirname, "./demo-02.html"), "utf-8", function (
      err,
      data
    ) {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  }
});
