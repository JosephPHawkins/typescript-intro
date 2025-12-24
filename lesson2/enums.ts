//just gives us a specific amount of options we are allowed to choice from so we dont get errors
//in typescript but not js
//if no intialized, starts from 0 and incrememnts by one
 enum PetStatus {
    HAPPY ='happy', 
    HUNGRY = 'hungy',
    GOOFY ='goofy',
}


let myPet : PetStatus 

myPet = PetStatus.GOOFY


//example use of enum 


function petAction (status: PetStatus) {

    if (status === PetStatus.GOOFY) {
        console.log(`your dog bonked his head becasue he is ${status}`)
    } else if (status === PetStatus.HAPPY) {
         console.log(`your dog smiled becasue he is ${status}`)
    } else if (status === PetStatus.HUNGRY) {
         console.log(`your dog ate the couch becasue he is ${status}`)
    }
    
}

petAction(PetStatus.HAPPY)


