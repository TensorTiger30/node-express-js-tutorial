// This module covers concept related to the OS module
const os = require('os')

const user = os.userInfo();

console.log(user)

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    currentMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)
