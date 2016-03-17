
var coder = require('js-coder');
var ast = new coder.AST();

var b = coder.createVariableDecl('b', null);
ast.addChild(b);


console.log(ast);
console.log();
console.log(JSON.stringify(ast, 2, 2));
