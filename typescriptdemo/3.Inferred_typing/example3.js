var myString = "This is a string";
console.log(myString);
//Example without any
var u = true;
//u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
//Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
var v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
console.log(v); // logs "string"
