// This module covers concept related to the sync file module 
const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const first = readFileSync(path.resolve("resources", "first.txt"), "utf8");
const second = readFileSync(path.resolve("resources", "second.txt"), "utf8");

console.log(first, second);

writeFileSync(
  path.resolve("resources", "sync.txt"),
  `The resultant of the first and second file: ${first} and ${second} \n`,
  { flag: "a" }
);
