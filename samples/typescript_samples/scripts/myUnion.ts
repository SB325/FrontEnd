let score: number | string = 33

score = 44

score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let sheldon: User | Admin = {name: "sheldon", id: 432}
sheldon = {username: "sheldon", id: 432}

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    } else {
        console.log(`DB id is: ${id+2}`);
    }
}

//array
const data: (string |number)[] = [1,2,3, "4"] // all numbers or all strings

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
//seatAllotment = "crew"  // error

