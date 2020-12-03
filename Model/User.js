//Vi forsøgte at få brugt den nedenstående class som skabelon for det der skal gemme i localstorage

//const users = require ('../de users som bliver oprettet) 
 /*class User {
    constructor (firstName, lastName, email, prefGender, gender, password, birthday){
        this.firstName =  firstName
        this.lastName = lastName
        this.email = email
        this.prefGender = prefGender
        this.gender = gender
        this.password = password
        this.birthday = birthday       
    }
}*/
/*const form = document.getElementById ('form')
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


/*submitButton.addEventListener('click', function(){
    localStorage.setItem = userObj
    
    userArray.push(userObj)

    var userObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    prefGender: prefGender,
    gender: gender,
    password: password,
    birthday: birthday,
}})*/

/*localStorage.setItem('fornavn', firstName.value)
    localStorage.setItem ('efternavn', lastName.value)
    localStorage.setItem ('email', email.value)
    localStorage.setItem ('interesse', prefGender.value)
    localStorage.setItem ('køn', gender.value)
    localStorage.setItem('adgangskode', password.value)
    localStorage.setItem ('fødselsdag', birthday.value)*/


/*var userArray = []

document.querySelector('#submit'). addEventListener('click', function(){
var firstName = document.getElementById ('fornavn').value
var lastName = document.getElementById('efternavn').value
var email = document.getElementById('email').value
var prefGender = document.getElementById ('interesse').value
var gender = document.getElementById ('køn').value
var password = document.getElementById ('adgangskode').value
var birthday = document.getElementById ('fødselsdag').value

localStorage.setItem.userObj


*/
