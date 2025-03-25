import * as http from "node:http";
import * as fs from "node:fs/promises"
const app = http.createServer( async(req, res) => {

  if (req.url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end("<h1>This is about page</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end("<h1>This is contact page</h1>");
  } else if (req.url === "/dashboard") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end("<h1>This is dashboard page</h1>");
  } else if (req.url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const data =  await fs.readFile("./index.html")
    res.end(data);
  } else {
    res.writeHead(500, {
      "content-type": "text/html",
    });
    res.end("ERROR INVALID URL");
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
