/*

const userInfo = {
    name: 'Joseph', 
    isPaid: true, 
    email: 'joseph@gmail.com',
    isActive: true
}

function createUser(person: { name: string, isPaid: boolean }) {
    return "hello " + person.name
}

//createUser({name: 'tom', isPaid: false, randomInfo: 432}) doesnt work 

createUser(userInfo)

console.log(createUser({name: 'joseph', isPaid: false}))

function createCourse(course: {courseName: string, isPaid: boolean}): string {return course.courseName}



//type alisas

type UserFunny = {
    name: string, 
    id: number
    isActive: true
}

function createFunnyAccount(user: UserFunny): UserFunny {
    console.log(user.name + ' id is ' + user.id )
    return {name: user.name, id: user.id, isActive: user.isActive}
}

createFunnyAccount({name: 'joseph', id: 3, isActive: true})
*/


//read only makes it so you can only read form it and not edit it , after initalization
//question mark means its ok to not have it 

type User = {
    readonly _id: number
    email: string
    isActive: boolean
    creditCard? : boolean
}


const myUser : User = {_id: 1, email:'joseph@gmail.com', isActive: true}

console.log(myUser)

//doesnt work becasue you can change read only
//myUser._id = 3


//combining type aliases for a specific type you want it make it happen 
type cardNumber = {
    cardnumber: string
} 

type cardDate = {
    carddate: string
}

//card details must contain all of these infomraion 
type cardDetails = cardNumber & cardDate & {
    cvv: string
}


const myCard : cardDetails = {
    cardnumber: '1234', 
    carddate: 'today', 
    cvv: '123'
}

console.log(myCard)

export {}