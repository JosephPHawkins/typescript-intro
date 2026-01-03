//less strict that a specific type like number for input and output, more strict for any, lets us prevent from creating a function that takes 3 and then using toString which any allows, becasue js cant tell what to restrict
function identity(val) {
    return val;
}
var Joseph = identity({ name: 'joseph', age: 22 });
console.log(Joseph);
