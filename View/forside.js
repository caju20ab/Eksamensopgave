//Kriterier til de oplysninger brugeren laver når han opretter profil
//const User = require ("../Model/User");
//const bodyParser = require("body-parser");



/*submitButton.addEventListener('click', function(){
    localStorage.setItem('fornavn', firstName.value)
    localStorage.setItem ('efternavn', lastName.value)
    localStorage.setItem ('email', email.value)
    localStorage.setItem ('interesse', prefGender.value)
    localStorage.setItem ('køn', gender.value)
    localStorage.setItem('adgangskode', password.value)
    localStorage.setItem ('fødselsdag', birthday.value)

})
/*
var value = JSON.stringify[User.firstName, User.lastName, User.email, User.prefGender, User.gender, User.password, User.birthday]
localStorage.setItem('newUser', value)
var createdUser = JSON.parse(localStorage.getItem('newUser'))
var addUser = JSON.stringify(createdUser)
localStorage.setItem('newUser_' + fname, JSON.stringify(user))*/

/*var value = JSON.stringify([user.name, user.lastName, user.Password, user.Birthday, user.Gender, user.Mail]);
localStorage.setItem("newUser", value);
var createdUser = JSON.parse(localStorage.getItem("newUser"));
//createdUser.push(new User (user.name, user.lastName, user.Birthday, user.Gender, user.Mail));
var addUser = JSON.stringify(createdUser);
localStorage.setItem("newUser_"+fname, JSON.stringify(user));*/

/*const rememberDiv = document.querySelector('.husk');
const form = document.querySelector('form')
const submitButton = document.querySelector ('#submit')

//https://www.youtube.com/watch?v=In0nB0ABaUk Se den her video, for at sætte kriterier til submit knappen
form.addEventListener('submit', function(e){
    e.preventDefault();
});*/


//Adgangskode kriterierne 
document.getElementById("password").addEventListener("keyup",function(){
    console.log(password.value);
    if (password.value.length <=7){
        document. getElementById("forkert").innerHTML = "Adganskoden skal være min. 8 karakterer" 
        }
        else {
            document. getElementById("forkert").innerHTML = "" 
        
        }})
    
        document.getElementById("password").addEventListener("keyup",function(){
        console.log(password.value);
        if (password.value.search (/[0-9]/)==-1){
            document. getElementById("fail").innerHTML = "Adganskoden skal indeholde tal" 
            }
            else {
                    document. getElementById("fail").innerHTML = "" 
                
                }})
    
    document.getElementById("password").addEventListener("keyup",function(){
    console.log(password.value);
    if (password.value.search (/[a-z]/)==-1){
            document. getElementById("fail2").innerHTML = "Adganskoden skal indeholde et lille bogstav" 
             }
            else {
            document. getElementById("fail2").innerHTML = "" 
                            
                }})
    
    document.getElementById("password").addEventListener("keyup",function(){
    console.log(password.value);
    if (password.value.search (/[A-Z]/)==-1){
            document. getElementById("fail3").innerHTML = "Adganskoden skal indeholde et lille bogstav" 
             }
            else {
            document. getElementById("fail3").innerHTML = "" 
                                            
                 }})
    

    
                 //Email kriterieriet            
    document.getElementById("email").addEventListener("keyup",function(){
    console.log(email.value);
    if (email.value.search (/[@]/)==-1){
            document. getElementById("fail4").innerHTML = "Emailadressen skal indeholde @" 
            }
            else {
            document. getElementById("fail4").innerHTML = "" 
                                                            
                 }})
    
    
//Login med den oprettede bruger 

//const form2 = document.querySelector('login')
//const emailVerification = document.querySelector('#email2')
//const passwordVerification = document.querySelector ('#adgangskode2')


