// Primitive
// 7 Types : String , Number , Boolean , null , undefined , Symbol , BigInt



// Reference  (Non Primitive)
// Array , Object , Function

// example of array=["abdullah","kahlid"]
// example of let object={
//        name:"Abdullah"
//        age:23
// }

// typeof data ++++++++++ result

// undefined      -       undefined
// null           -       Object
// Boolean        -       Boolean
// Number         -       Number
// String         -       String
// Object         -       Object
// function       -       function


//====================================


// stack (Primitive) , Heap(Non-Primitive)

/*---------stack (Primitive)------------
let myYoutubeName = "abdullah khalid"

let anothername = myYoutubeName

anothername = "chaitocode"

console.log(myYoutubeName)  abdullah khalid
console.log(anothername)    chaitocode
------------------------------------------
*/

/*
Heap(Non-Primitive)

let userone = {
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo = userone

usertwo.email="abdullha@gmail.com"

console.log(userone) { email: 'abdullha@gmail.com', upi: 'user@ybl' }
console.log(usertwo) { email: 'abdullha@gmail.com', upi: 'user@ybl' }
*/

// Note:-
// stack  create a copy 
// heap create a reference  original value get updated in heap


