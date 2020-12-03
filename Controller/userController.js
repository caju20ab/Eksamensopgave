//const users = require ('../HardUser');
/*const User = require ('../model/user');
//const service = require ('../service')

function userController (req, res){
    res.json (users)
}

function addNewUser (req, res) {
    console.log (req.body.lname)
    const user = new User (req.body.fname, req.body.lname);
    users.push (user);
    res.sendStatus(200);
}
function deleteUser (req, res){
    const fname = req.params.id
    console.log = (fname)
    service.removeByAttr (users, 'fname', `${fname}`)
    res.sendStatus (200)
}

module.exports = {
    userController,
    addNewUser,
    deleteUser
}*/

const form = document.getElementById ('form')
const submitButton = document.getElementById ('submit').addEventListener('click', saveUser)
form.addEventListener('submit', function(e){
    e.preventDefault();
})

function saveUser(){
const firstName = document.getElementById ('firstName').value
const lastName = document.getElementById('lastName').value
const email = document.getElementById('email').value
const prefGender = document.getElementById ('prefGender').value
const gender = document.getElementById ('gender').value
const password = document.getElementById ('password').value
const birthday = document.getElementById ('birthday').value

let user = {
    firstName : firstName,
    lastName : lastName,
    email : email,
    prefGender : prefGender,
    gender : gender,
    password : password,
    birthday : birthday
    
}


var value = JSON.stringify([user.firstName, user.lastName, user.email, user.prefGender, user.gender, user.password, user.birthday]);
localStorage.setItem("user", value);
var createdUser = JSON.parse(localStorage.getItem("user"));
var addUser = JSON.stringify(createdUser);
localStorage.setItem("user_" + firstName, JSON.stringify(user))
}