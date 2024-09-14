// This module covers concept related to the path module
const path = require('path')
console.log(path)

// Construct the file path
const filePath = path.join('resources', 'test.txt')
console.log(filePath)

// Derive the base path
const base = path.basename(filePath)
console.log(base)

// Get the absolute path
const absolute = path.resolve(__dirname, 'resources', 'test.txt')
console.log(absolute)