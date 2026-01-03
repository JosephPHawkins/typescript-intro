var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
function detectType(val) {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    return val.toFixed(2);
}
//use this instead of if statments to see if its a string or soemthing else, cause it can be a empty string and deny it
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return shape.side * shape.side;
}
console.log(getArea({ kind: "Sqaure", side: 5 }));
