
//allows us to order them
let userInfo: [string , number]

userInfo = ['joseph', 2]





let rgb: [number, number, number]



type UserFriend = [string, number]

let myUser: UserFriend = ['car', 2]

//myUser = [2,'3']. ---> doesnt work because of the order  

myUser.push(3) // this is a error, that can bypass the checking, it should be throwing a error, because we are adding another value, but we literally only want string and number, so you should watch out for this



myUser[0] = '1'

//allows us to edit values still which might not bwe something we wan t

//these methods bypass the restrictions we imposed