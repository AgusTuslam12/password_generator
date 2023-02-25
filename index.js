
let password = document.getElementById("password")
let hash = document.getElementById("hash")

let passwordLength = 12;

function generatePassword(){
     const lowerAlpabet = "abcdefghijklmnopqrstuvwxyz"
     const upperAlpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     const numeric = "0123456789"
     const symbol = "!@#$%^&*()_-=+{}[];:,.<>/?`~"

    const data = lowerAlpabet + upperAlpabet + numeric + symbol
    let generator = '';

    for(let index = 0; index < passwordLength; index++){
        generator += data[~~(Math.random() * data.length)];
        
    }
    return generator
}

function getPassword(){
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword

    // document.getElementById('hash').innerHTML = CryptoJS.MD5(newPassword);

    if(newPassword){
        var hashed = CryptoJS.MD5(newPassword);
        hash.value = hashed;
    }else{
        alert('Password is Missing')
    }

    //     setTimeout(() => {
    //     alert('password has been generated')
    // }, 200)

        

    
}


function reset(){

    document.getElementById('password').value ='';
    document.getElementById('hash').value = '';


}