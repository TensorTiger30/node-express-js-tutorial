// This module covers concept related to the async file module
const { readFile, writeFile } = require("fs");
const path = require("path");

// Read first file using async file module
readFile(path.resolve("resources", "first.txt"), "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  // Read second file using async file module
  readFile(path.resolve("resources", "second.txt"), "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    // Write to file using async file module
    writeFile(
      path.resolve("resources", "async-result.txt"),
      `Here is the async result ${first} and ${second}\n`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
