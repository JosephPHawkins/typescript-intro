
let score : number | string 

score = 3

score = '3'


function getDBId(id: number | string) {

    if (typeof id === 'string') {

        id.toLowerCase()

    } else if (typeof id === 'number') {
        id = id + 1 
    }
    
    //id + 1 doesnt work because it has the potential to be string 
    return id 
    

}

console.log(getDBId(2))



//arrays
const data1: number[] =  [1,2,3]
const data2: (number | string)[] = [1, '1']
const data3: number [] | string [] = [1,2,3] //either full number or full string 



//having some variables only have some specifc option is useful to prevent, picking wrong variable in the future

let passengerSeat : 'window' | 'isle' | 'middle'

//passengerSeat = 'cockpit' -> doesnt work 

passengerSeat = 'window'

//only allows for these few options to be picked, more specific too to what it can be and allowed

export {}