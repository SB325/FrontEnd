//const User = {
//    name: "sheldon",
//    email: "sbish33@gmail.com",
//    isActive: true
//}

//function createUser({name: string, isPaid: boolean}){}

//let newUser = {name: "sheldon", isPaid: false, email: "ha@g.com"}

//createUser(newUser)

//function createCourse():{name: string, isPaid: boolean}{
//    return{name: "sheldon", isPaid: false}
//}


//type User = {
//    name: string;
//    email: string;
//    isActive: boolean
//}

//function createUser(user: User){}

//createUser({name:"", email:"", isActive: true})

type User = {
    readonly _id: string;  //read only
    name: string;
    email: string;
    isActive: boolean,
    ccnum?: number  //optional
}

let myUser: User = {
    _id: "1234",
    name: "s",
    email: "s@s.com",
    isActive: false
};

myUser.email = "d@d.com"
myUser.ccnum = 4

export {}
