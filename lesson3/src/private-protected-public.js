var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var family = /** @class */ (function () {
    //this is ts notation for creating constutor for this class vairable
    function family(name, age, relative) {
        this.name = name;
        this.age = age;
        this.relative = relative;
    }
    Object.defineProperty(family.prototype, "parents", {
        //getters and setters are great for getting access to private class
        get: function () {
            return this.parents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(family.prototype, "addParent", {
        set: function (name) {
            this.parents.push(name);
        },
        enumerable: false,
        configurable: true
    });
    return family;
}());
var distantFamily = /** @class */ (function (_super) {
    __extends(distantFamily, _super);
    function distantFamily() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(distantFamily.prototype, "notCloselyRelated", {
        get: function () {
            return this.relative;
        },
        enumerable: false,
        configurable: true
    });
    return distantFamily;
}(family));
