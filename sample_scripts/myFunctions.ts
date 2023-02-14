
function addTwo(num: number): number{
    return num + 2
}

function getUpper(num: string){
    return num.toUpperCase()

}

function signUpUser(name: string, email: string, password: string, isPaid: boolean){

}

let loginUser = (name: string, email: string, isPaid: boolean=false) => { 
    if (isPaid === void 0) { isPaid = false;}
};

function getValue(myVal: number): boolean{
    if (myVal > 5) {
        return true
    }
    return false
    //return "200 OK"
}

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, 2, 3]

heros.map(hero => {
        return `${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

addTwo(5)
getUpper("sheldon")
signUpUser("sheldon", "sbish33@gmail.com", "sdfw", false)
loginUser("sheldon", "sbish33@gmail.com")

