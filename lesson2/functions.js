"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAccount(username, email, password, paidMembership) {
    if (paidMembership === void 0) { paidMembership = false; }
    return 'account created';
}
//let tosephAccount = createAccount('toseph', 'toseph@gmail.com', '123', true)
var josephAccount = createAccount('joseph', 'joseph@gmail.com', '123');
function addTwo(num) {
    return num + 2;
    //return 'hello'
}
addTwo(4);
// defining what should be returned
// const heros = ['batman', 'superman', 2] ---> does not work because of 2
var heros = ['batman', 'superman', 'robin'];
heros.map(function (hero) {
    return "the hero is ".concat(hero);
});
//void returns nothing
function printWord(word) {
    console.log(word);
    //return word
}
printWord('hello world');
function displayError(errmssg) {
    throw new Error(errmssg);
}
displayError('this function is a error');
