var fs = require("fs");
var contents = fs.readFileSync("test.txt", "utf8");

const arr = contents.split("\n");

const cppArray = [];
const cArray = [];
const csArray = [];

arr.forEach(el => {
  if (el.indexOf("c_") !== -1) {
    cArray.push(el);
  }
  if (el.indexOf("cs_") !== -1) {
    csArray.push(el);
  }
  if (el.indexOf("cpp_") !== -1) {
    cppArray.push(el);
  }
});

const c_writeStream = fs.createWriteStream("c_test.txt");
const cpp_writeStream = fs.createWriteStream("cpp_test.txt");
const cs_writeStream = fs.createWriteStream("cs_test.txt");

c_writeStream.write(cArray.join("\n"));
cpp_writeStream.write(cppArray.join("\n"));
cs_writeStream.write(csArray.join("\n"));

c_writeStream.end();
cpp_writeStream.end();
cs_writeStream.end();
