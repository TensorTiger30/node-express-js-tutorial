// Code example showcasing implementation of event loop

const { readFile } = require("fs");
const path = require("path");

// asynchronous task -> event loop
console.log("start the first task");
readFile(path.resolve("resources", "first.txt"), "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
  console.log("second task completed!");
});

// synchronous task
console.log("start the second task");
