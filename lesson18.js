function countOnline(usersObj) {
  // Only change code below this line
let i = 0;
for (let user in usersObj) {
  if (usersObj[user].online === true) {
    //code
  i++
  }
}
return i  // Only change code above this line
}
