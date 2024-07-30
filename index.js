///////////////////////////////////First Vidoe/////////////////////////////////////
// const fs = require("node:fs");
// const logger = require("./logger");

// logger.log("test");
// logger.add(1, 5);

// console.log(__dirname);
///////////////////////////////////First Vidoe/////////////////////////////////////

///////////////////////////////////Second Vidoe/////////////////////////////////////
const fs = require("node:fs");

//read file

// 1. Blocking code
// const fileContent = fs.readFileSync("./hello.txt", "utf8");
// console.log("The file content: ", fileContent);

// 2. non- blocking code
fs.readFile("./hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err);
  } else {
    console.log("File content: ", data);
  }
});

// // write to file
// fs.writeFileSync(
//   "./users.json",
//   JSON.stringify([{ id: 1, name: "ahmad" }]),
//   "utf8",
//   (err) => {
//     if (err) {
//       console.log("Error write file: ", err);
//     }
//     console.log("Done writing file");
//   }
// );

// delete file
// fs.unlink("./users.json", (err) => {
//   if (err) {
//     console.log("Error deleting file", err);
//   }
// });
