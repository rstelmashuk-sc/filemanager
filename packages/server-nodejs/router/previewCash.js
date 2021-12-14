// 'use strict'
//
// const fs = require('fs');
// const path = require("path");
//
// class Cash {
//   constructor() {
//     this.cash = [];
//     this.path = path.join(__dirname, '..', '/preview/preview.json');
//   }
//
//   getCash() {
//     return this.cash;
//   }
//
//   writeCashFromFile() {
//     fs.readFile(this.path, 'utf8', (err, data) => {
//       const previewArr = JSON.parse(data);
//       this.cash = previewArr;
//     });
//   }
//
//   updateCash(previewObj) {
//     this.cash.push(previewObj);
//     fs.writeFile(path, JSON.stringify(this.cash), (err) => {console.log(err)});
//     return this.getCash();
//   }
// }
//
// const cash = new Cash();
// cash.writeCashFromFile();
//
// module.exports = cash;
