
//husk, og glemme bruger

const User = require("../Model/User");



const rememberDiv = document.querySelector('.husk');
const form = document.querySelector('form')
const firstName = document.querySelector('#fornavn')
const lastName = document.querySelector('#efternavn')
const email = document.querySelector('#email')
const prefGender = document.querySelector ('#interesse')
const gender = document.querySelector ('#køn')
const password = document.querySelector ('#adgangskode')
const birthday = document.querySelector ('#fødselsdag')
const submitButton = document.querySelector ('#submit')


//https://www.youtube.com/watch?v=In0nB0ABaUk Se den her video, for at sætte kriterier til submit knappen
form.addEventListener('submit', function(e){
    e.preventDefault();
});


submitButton.addEventListener('click', function(){
    localStorage.setItem('fornavn', firstName.value)
    localStorage.setItem ('efternavn', lastName.value)
    localStorage.setItem ('email', email.value)
    localStorage.setItem ('interesse', prefGender.value)
    localStorage.setItem ('køn', gender.value)
    localStorage.setItem('adgangskode', password.value)
    localStorage.setItem ('fødselsdag', birthday.value)

})

let user = new User

let userArray = []



//Kriterier til de oplysninger brugeren laver når han opretter profil



//Adgangskode kriterierne 
document.getElementById("adgangskode").addEventListener("keyup",function(){
    console.log(adgangskode.value);
    if (adgangskode.value.length <=7){
        document. getElementById("forkert").innerHTML = "Adganskoden skal være min. 8 karakterer" 
        }
        else {
            document. getElementById("forkert").innerHTML = "" 
        
        }})
    
        document.getElementById("adgangskode").addEventListener("keyup",function(){
        console.log(adgangskode.value);
        if (adgangskode.value.search (/[0-9]/)==-1){
            document. getElementById("fail").innerHTML = "Adganskoden skal indeholde tal" 
            }
            else {
                    document. getElementById("fail").innerHTML = "" 
                
                }})
    
    document.getElementById("adgangskode").addEventListener("keyup",function(){
    console.log(adgangskode.value);
    if (adgangskode.value.search (/[a-z]/)==-1){
            document. getElementById("fail2").innerHTML = "Adganskoden skal indeholde et lille bogstav" 
             }
            else {
            document. getElementById("fail2").innerHTML = "" 
                            
                }})
    
    document.getElementById("adgangskode").addEventListener("keyup",function(){
    console.log(adgangskode.value);
    if (adgangskode.value.search (/[A-Z]/)==-1){
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

const form2 = document.querySelector('login')
const emailVerification = document.querySelector('#email2')
const passwordVerification = document.querySelector ('#adgangskode2')


let

XMLHttpRequest
    