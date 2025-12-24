
function createAccount(username: string, email: string, password: string, paidMembership: boolean = false) {
    return 'account created'
}


//let tosephAccount = createAccount('toseph', 'toseph@gmail.com', '123', true)

let josephAccount: string = createAccount('joseph', 'joseph@gmail.com', '123')



function addTwo(num: number): number {
    return num + 2 
    //return 'hello'
}

addTwo(4)


// defining what should be returned

// const heros = ['batman', 'superman', 2] ---> does not work because of 2

const heros = ['batman', 'superman', 'robin'] 


heros.map((hero: string): string => {
    return `the hero is ${hero}`
})

//void returns nothing

function printWord(word: string): void {
    console.log(word)
    //return word
}

printWord('hello world')


function displayError(errmssg: string) : never {
    throw new Error(errmssg)
}

displayError('this function is a error')





export {}