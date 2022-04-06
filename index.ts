import * as ts from "typescript";
import * as fs from "fs";

const classicContents = fs.readFileSync("./classic.js").toString();
const arrowContents = fs.readFileSync("./arrow.js").toString();

const iterations = 100;

console.time("normal function");
for (let i = 0; i < iterations; i++) {
  const sourcefile = ts.createSourceFile(
    "classic",
    classicContents,
    ts.ScriptTarget.ES2015,
    /*setParentNodes */ true
  );
}
console.timeEnd("normal function");
console.time("arrow function");
for (let i = 0; i < iterations; i++) {
  const sourcefile = ts.createSourceFile(
    "arrow",
    arrowContents,
    ts.ScriptTarget.ES2015,
    /*setParentNodes */ true
  );
}
console.timeEnd("arrow function");
