/* class User {
    
     
    name : string
    readonly city: string  = 'joseph'
    email : string
    constructor (email: string, name: string) {
        this.name = name
        this.email = email
    }
}


const Joseph = new User('joseph.com', 'joseph' )
 */
//Joseph.city = 'read'
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.city = 'joseph';
    }
    return User;
}());
var Joseph = new User('joseph.com', 'joseph');
