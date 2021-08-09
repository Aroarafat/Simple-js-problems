// PROBLEM-04
// PERFECT-FRIEND-FUNCTION
// MAIN-TASK
function perfectFriend(friendsName) {
    let fNames = [];
    for (const element of friendsName) {
        if (element.length == 5) {
            fNames = element;
            return fNames;
        }
    }
    // ERROR-MESSAGE 
    return "please input a 5 character name";
}

const friendsNames = ["ayon", "abir", "asif", "arafa", "arif",];
let names = perfectFriend(friendsNames);
// OUTPUT
console.log(names);