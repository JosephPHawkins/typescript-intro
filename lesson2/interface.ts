
interface Animal {
    name: string
    age: number
    attack: (move: string) => number
}


const frog: Animal = {name: 'freaky frog', age: 3, attack : (move: string ) => {return 2}, height : 2}


console.log(frog.attack('mokey'))


interface Animal {
    height: number
}


interface fish extends Animal {
    gills: boolean
}

