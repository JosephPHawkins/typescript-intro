abstract class mammal {
    constructor (name: string, location: string ) {

    }

    eatPrey() {

    }

} 

class monkey implements mammal {

    constructor (name: string, location: string, height: String ) {

    }

    eatPrey() {
        console.log('eat prey')
    }
}

const coolMonkey = new monkey('john', 'sj', 'tall')

