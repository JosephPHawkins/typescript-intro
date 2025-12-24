"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = { _id: 1, email: 'joseph@gmail.com', isActive: true };
console.log(myUser);
var myCard = {
    cardnumber: '1234',
    carddate: 'today',
    cvv: '123'
};
console.log(myCard);
