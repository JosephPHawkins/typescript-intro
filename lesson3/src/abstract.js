var mammal = /** @class */ (function () {
    function mammal(name, location) {
    }
    mammal.prototype.eatPrey = function () {
    };
    return mammal;
}());
var monkey = /** @class */ (function () {
    function monkey(name, location, height) {
    }
    monkey.prototype.eatPrey = function () {
        console.log('eat prey');
    };
    return monkey;
}());
var coolMonkey = new monkey('john', 'sj', 'tall');
