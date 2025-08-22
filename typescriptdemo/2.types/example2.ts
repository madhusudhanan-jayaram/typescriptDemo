var myString="Madhu";
var myNumber=10;
var myBoolean=true; 
myString= myNumber; // This will cause a type error in TypeScript
myBoolean= myString; // This will also cause a type error
myNumber= myBoolean; // This will also cause a type error