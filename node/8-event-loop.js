/**
 *
 *
 * This script dicusses the concepts related to Event Loop in JavaScript
 * Event Loop allows to perform non-blocking I/O operations
 * even though JavaScript is single threaded
 * by offloading operations to system kernel wherever possible
 *
 * Steps involved in event loop:
 * =============================
 * 1. Node App receives a request from the client
 * 2. Event loop registers the callback
 * 3. It responds back to the request once the callback has been processed
 *
 *
 */

// synchronous task
console.log("first task");

// asynchronous task -> callback (would be executed, once all the synchronous tasks are executed)
setTimeout(() => {
  console.log("second task");
}, 0);

// synchronous task
console.log("third task");
console.log("fourth task");
console.log("fifth task");
console.log("sixth task");
