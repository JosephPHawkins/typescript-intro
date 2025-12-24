//just gives us a specific amount of options we are allowed to choice from so we dont get errors
//in typescript but not js
//if no intialized, starts from 0 and incrememnts by one
var PetStatus;
(function (PetStatus) {
    PetStatus["HAPPY"] = "happy";
    PetStatus["HUNGRY"] = "hungy";
    PetStatus["GOOFY"] = "goofy";
})(PetStatus || (PetStatus = {}));
var myPet;
myPet = PetStatus.GOOFY;
//example use of enum 
function petAction(status) {
    if (status === PetStatus.GOOFY) {
        console.log("your dog bonked his head becasue he is ".concat(status));
    }
    else if (status === PetStatus.HAPPY) {
        console.log("your dog smiled becasue he is ".concat(status));
    }
    else if (status === PetStatus.HUNGRY) {
        console.log("your dog ate the couch becasue he is ".concat(status));
    }
}
petAction(PetStatus.HAPPY);
