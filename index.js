"use strict";
exports.__esModule = true;
var ts = require("typescript");
var fs = require("fs");
var classicContents = fs.readFileSync("./classic.js").toString();
var arrowContents = fs.readFileSync("./arrow.js").toString();
var iterations = 100;
console.time("normal function");
for (var i = 0; i < iterations; i++) {
    var sourcefile = ts.createSourceFile("classic", classicContents, ts.ScriptTarget.ES2015, 
    /*setParentNodes */ true);
}
console.timeEnd("normal function");
console.time("arrow function");
for (var i = 0; i < iterations; i++) {
    var sourcefile = ts.createSourceFile("arrow", arrowContents, ts.ScriptTarget.ES2015, 
    /*setParentNodes */ true);
}
console.timeEnd("arrow function");
