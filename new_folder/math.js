const fs = require("fs");

function datas(filePas) {
   console.log( fs.readFileSync(filePas).toString());
}

const PI = 3.14;

module.exports = {datas, PI}