import * as readline from "node:readline/promises";
import chalk from "chalk";
import {
  createFolder,
  createFilePromise,
  writeFilewithContent,
  delFile,
  delFolder,
  listItem,
} from "./fs.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function menu() {
  console.clear();
  console.log(
    chalk.cyan.bold(
      "----------------------- FILEMANAGER-X ---------------------------"
    )
  );
  const options = [
    "CREATE FOLDER",
    "CREATE FILE",
    "WRITE TO FILE",
    "DELETE FILE",
    "DELETE FOLDER",
    "LIST OF ITEMS",
    "EXIT",
  ];

  options.forEach((opt, i) => {
    console.log(chalk.yellowBright(`${i + 1}:${chalk.blueBright(opt)}`));
  });
  const answer = await rl.question(chalk.bold.greenBright("\nSELCET OPTION: "));

  if (answer === "1") {
    const folderName = await rl.question(
      chalk.bold.grey("\nPLEASE ENTER THE FOLDER NAME: ")
    );
    console.log(folderName);
    await createFolder(folderName);
    console.log(
      chalk.bold.greenBright("Folder has been created successfully!")
    );
  } else if (answer === "2") {
    const path = await rl.question(
      chalk.bold.grey("\nPLEASE ENTER THE PATH: ")
    );
    await createFilePromise(path);
    console.log(chalk.bold.greenBright("File has been created successfully!"));
  } else if (answer === "3") {
    const path = await rl.question(
      chalk.bold.grey("\nPLEASE ENTER THE PATH: ")
    );
    const content = await rl.question(
      chalk.bold.grey("\nPLEASE ENTER THE CONTENT: ")
    );
    await writeFilewithContent(path, content);
    console.log(
      chalk.bold.greenBright("Content has been appended successfully!")
    );
  } else if (answer === "4") {
    const path = await rl.question(
      chalk.bold.grey("\nPLEASE ENTER THE PATH: ")
    );
    await delFile(path);
    chalk.bold.greenBright("File has been deleted successfully!");
  } else if (answer === "5") {
    const folderPath = await rl.question(
      chalk.bold.grey("\nPLEASE ENTER THE FOLDER NAME: ")
    );

    await delFolder(folderPath);
    chalk.bold.greenBright("Folder has been deleted successfully!");
  } else if (answer === "6") {
    const listPath = await rl.question(
      chalk.bold.grey("Enter the folder path you want to see!")
    );
    console.log(chalk.bold.magenta("--------------LIST----------------"));
    const list = await listItem(listPath);
    list.forEach((item, i) => {
      let icon = "";
      if (item.Type === "folder") {
        icon = "🗂️";
      } else {
        icon = "📄";
      }
      console.log(chalk.bold.cyanBright(`${i + 1}: ${item.Name} ${icon}`));
    });
  } else if (answer === "7") {
    console.log(chalk.bold.redBright("Exiting FileManager-X..."));
    process.exit();
  } else {
    console.log(
      chalk.red.bold("xxx-------PLEASE ENTER THE VALID INPUT------xxx")
    );
  }
  await rl.question(chalk.bold.grey("\nPRESS ENTER TO CONTINUE...."));
  await menu();
}
menu();
