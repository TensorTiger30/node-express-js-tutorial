// Start exploring npm
// Commands used
// npm init -y
// npm i <package_name>
// npm uninstall <package_name>
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
