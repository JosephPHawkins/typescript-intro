

class family {

    
    //this is ts notation for creating constutor for this class vairable
    constructor (public name: String, public age: Number, protected relative: string[], ) {

    }

    //getters and setters are great for getting access to private class

    get parents() : string[] {
        return this.parents
    }


    set addParent(name: string) {
        this.parents.push(name)
    }




}

class distantFamily extends family {

    get notCloselyRelated(): string[] {
        return this.relative
    }
}