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


class User {
    readonly city : string = 'joseph'
    constructor(public name: string, public age: string) {

    }
}

const Joseph = new User('joseph.com', 'joseph' )


