const fs = require("fs");

function makeFunction(ix) {
  return `
    function MyComponent${ix.toString()}(someProps) {
      return "hello world"
    }
  `;
}

function makeArrowFunction(ix) {
  return `
      const Arrow${ix.toString()} = (someProps) => {
        return "hello world"
      }
    `;
}

const iterations = 10000;

let buffer = "";
for (let i = 0; i < iterations; i++) {
  buffer += makeFunction(i);
}

let buffer2 = "";
for (let i = 0; i < iterations; i++) {
  buffer2 += makeArrowFunction(i);
}

fs.writeFileSync("classic.js", buffer);
fs.writeFileSync("arrow.js", buffer2);
