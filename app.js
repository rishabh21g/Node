import * as http from "node:http";
import * as fs from "node:fs";

const server = http.createServer( async(req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    // const data = await fs.readFile('./index.html',(err , data)=>{
    //   if(err){
    //     console.log("Error" , err.message)
    //   }else{
    //     res.end(data)
    //   }
    // }) // avoid for large file
    const dataStream = fs.createReadStream("./index.html");

    // dataStream.on("data", (chunk) => {
    //   res.write(chunk);
    // });
    // dataStream.on("end", () => {
    //   res.end();
    // });
    dataStream.pipe(res) // samller way 
    
  } else {
    res.writeHead(500, {
      "content-type": "text/html",
    });
    res.end("<h1>Error 404</h1>")
  }
});

server.listen(3000, ()=>{
    console.log(`Server is running on 3000`)
})