

//overall main goal allows us to keep that output and input the same type, when using it , so ts can tell 
//so when creating it , if you creat it as a number than the output must be a number


//less strict that a specific type like number for input and output, more strict for any, 
//lets us prevent from creating a function that takes 3 as a number and then using toString which any allows, 
// becasue js cant tell what to restrict
function identity <t> (val: t) : t {
    return val
}
// t works for any type, person, number, even made up types like person 

interface Person {
    name: string,
    age: number 
}

const Joseph = identity<Person>({name:'joseph', age: 22})

console.log(Joseph)





//more strict and only applies to one

function identityRestr (val: number): number {
    return val
}

identityRestr(3).toFixed(2) //knows to give only number fucntions but we only acount for numbers
// identity.upper() knows that this function wouldnt work

function identityAny (val: any) : any {
    return val
}


identityAny(2).UpperCase() // ts wouldnt say
//  a error wouldnt 
