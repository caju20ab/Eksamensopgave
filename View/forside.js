//husk, og glemme bruger
const rememberDiv = document.querySelector('.husk');
const form = document.querySelector('form')
const fnameInput = document.querySelector('#fornavn')
const lnameInput = document.querySelector('#efternavn')
const emailInput = document.querySelector('#email')
const genderInterest = document.querySelector ('#køn')
const genderInput = document.querySelector ('#køn')


















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
    
    

    