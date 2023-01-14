function addTwo(num) {
    return num + 2;
}
function getUpper(num) {
    return num.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid === void 0) {
        isPaid = false;
    }
};
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
    //return "200 OK"
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
//const heros = [1, 2, 3]
heros.map(function (hero) {
    return "".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
addTwo(5);
getUpper("sheldon");
signUpUser("sheldon", "sbish33@gmail.com", "sdfw", false);
loginUser("sheldon", "sbish33@gmail.com");
