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
}

const user = new User*/


//var userArray = []

const form = document.getElementById('div1')
const submitButton = document.getElementById ('submit')
const rememberDiv = document.getElementById('husk')



form.addEventListener('submit', function(e){
    e.preventDefault();
})

const firstName = document.getElementById ('fornavn').value
const lastName = document.getElementById('efternavn').value
const email = document.getElementById('email').value
const prefGender = document.getElementById ('interesse').value
const gender = document.getElementById ('køn').value
const password = document.getElementById ('adgangskode').value
const birthday = document.getElementById ('fødselsdag').value


let user = {
    fornavn : firstName,
    efternavn : lastName,
    email : email,
    interesse : prefGender,
    køn : gender,
    adgangskode : password,
    fødselsdag : birthday
}

var value = JSON.stringify([user.firstName, user.lastName, user.email, user.prefGender, user.gender, user.password, user.birthday]);
localStorage.setItem("newuser1", value);
var createdUser = JSON.parse(localStorage.getItem("newuser1"));
//createdUser.push(new User (user.name, user.lastName, user.Birthday, user.Gender, user.Mail));
var addUser = JSON.stringify(createdUser);
//localStorage.setItem("newUser" + firstname, JSON.stringify(user))


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
