
interface Animal {
    name: string
    age: number
    attack: (move: string) => number
}


const frog = {name: 'freaky frog', age: 3, attack: (move: 'freaky lick') => {return 2}
}


