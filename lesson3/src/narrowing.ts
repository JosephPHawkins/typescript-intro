

interface Course {
    name: string
    author: string
    subject: string
}


class Sellable<T> {
    public cart : T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}


function detectType(val: number | string) {
    if (typeof val === 'string') {
        return val.toUpperCase()
    }
    return val.toFixed(2)
}


interface User {
    name: string
    email: string 
}

interface Admin {
    name: string
    email: string
    isAdmin: string 
}

//use this instead of if statments to see if its a string or soemthing else, cause it can be a empty string and deny it
function isAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}





type Fish = {swim : () => void}

type Bird = {swim : () => void}



function isFish(pet: Fish| Bird) {
    return (pet as Fish).swim !== undefined
}


function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}






//



interface Circle {
    kind : "circle"
    radius: number
}


interface Sqaure {
    kind: "Sqaure"
    side: number 
    
}


type Shape = Circle | Sqaure 


function getArea(shape: Shape) : number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}



console.log(getArea({kind: "Sqaure", side:  5}))


