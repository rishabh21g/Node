import * as http from "node:http";
import * as fs from "node:fs/promises";

const PORT = 3000;
const app = http.createServer(async(req, res) => {
  if (req.url === "/") {
    if (req.method === "GET") {
      //Read data from db json
      //return data
      res.writeHead(200, { "content-type": "text/html" });
      const data = await fs.readFile('./db.json')
      res.end(data)
    } else if (req.method === "POST") {
      // read the data in db json
      // append the data
      res.writeHead(200, { "content-type": "text/html" });
      let buffer = "";
      req.on("data", (chunk) => {
        // console.log(chunk);
        buffer = buffer + chunk.toString();
      });
      req.on("end", async () => {
        const data = await fs.readFile("./db.json");
        const dbData = JSON.parse(data);
        dbData.push(JSON.parse(buffer));
        await fs.writeFile('./db.json' , JSON.stringify(dbData , null ,2));
        res.end('OK')
      });
    }
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<p>Something went wrong</p>");
  }
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
