// import * as fs from "node:fs";
import { error } from "node:console";
import * as fs from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

//^ Synchronous way of writing code ^
export function createFile(pathname) {
  fs.writeFileSync(pathname, "Hello Node js");
  fs.appendFileSync(pathname, " from Rishabh");
  console.log("File has been created successfully!");
}
// createFile('./hello.txt')

//------------------------------------------------------------------

//^ Asynchronous way of writing code ^

export function createFileAsync(pathname) {
  fs.writeFile(pathname, "Hello node Js", (error) => {
    // Err first call back in Node Js
    if (error) {
      console.log("Something went wrong!");
    } else {
      console.log("File has been created successfully!");
      fs.appendFile(pathname, "\nHello Js", (err) => {
        if (err) {
          console.log("Something went wrong!");
        } else {
          console.log("File appended successfully!");
        }
      });
    }
  });
  console.log("File operation done!");
}

// createFileAsync("./hello.txt");

//----------------------------------------------------------------------------------

// ^ Promise way of writing a code ^

export async function createFilePromise(pathname) {
  try {
    await fs.writeFile(pathname, "Hello Node js");
    // console.log("File has been created successfully!");
    // await fs.appendFile(pathname, "\nAppended successfilly");
    // console.log("Appended successfully!");
  } catch (err) {
    console.error("Something went wrong", err);
  } finally {
    console.log("File operation Done");
  }
}

// createFilePromise("./hello.txt");

// create file with content
export async function createFilewithContent(pathname, content = "") {
  await fs.writeFile(pathname, content);
}

// write file with content
export async function writeFilewithContent(pathname, content = "") {
  try {
    await fs.appendFile(pathname, content);
  } catch (err) {
    console.error(err.message);
  }
}
// create folder
export async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName, { recursive: true });
  } catch (err) {
    console.log("Error: ", err.message);
  }
}

// readfile
export async function readFile(pathname) {
  const data = await fs.readFile(pathname, "utf-8");
  console.log(data);
}

// createFileAsync('.hello.txt')
// readFile('./hello.txt')

export async function delFile(pathname) {
  try {
    await fs.rm(pathname);
  } catch (err) {
    console.log(err.message);
  }
}

// delFile('./hello.txt')

export async function delFolder(folderPath) {
  try {
    await fs.rmdir(folderPath);
  } catch (err) {
    console.log(err.message);
  }
}

// delFile('./hello.js')
// createFilewithContent('./hello.js' , "hello javascript")

export async function getFileinfo(pathname) {
  const FileInfo = await fs.stat(pathname);
  // console.log("FILE INFO:", FileInfo);
  return {
    size: `${(FileInfo.size / 1024).toFixed(2)} KB`,
    createdOn: `${FileInfo.atime.toLocaleDateString()}`,
  };
}

// getFileinfo("./index.js").then((stats) => console.log(stats));
export async function listItem(pathname = "./") {
  try {
    const items = await fs.readdir(pathname, { withFileTypes: true });
    return items.map((item) => ({
      Name: item.name,
      Type: item.isDirectory() ? "folder" : "file",
    }));
  } catch (err) {
    console.error(err.message);
    return []; 
  }
}

// const list = await listItem("./");
// console.log(list);
