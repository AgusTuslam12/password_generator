
let password = document.getElementById("password")
let hash = document.getElementById("hash")
let decrypt = document.getElementById("decrypt")
let hasilpass = document.getElementById("hasilpass")
let copyIcon = document.querySelector(".password-box .copy-icon")

let passwordLength = 12;

function generatePassword(){
     const lowerAlpabet = "abcdefghijklmnopqrstuvwxyz"
     const upperAlpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     const numeric = "0123456789"
     const symbol = "*#@!"

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

    var crypt = {
        // (B1) THE SECRET KEY
        secret : "CIPHERKEY",
  
        // (B2) ENCRYPT
        encrypt : clear => {
          var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
          return cipher.toString();
        },
  
        // (B3) DECRYPT
        decrypt : cipher => {
          var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
          return decipher.toString(CryptoJS.enc.Utf8);
        }
      };

      if(newPassword){
        var cipher = crypt.encrypt(newPassword)
        hash.value = cipher
        var decipher = crypt.decrypt(cipher);
        decrypt.value = decipher

      }else{
        alert('Password is Missing')
    }
  
//copy passInput's value on copyIcon click
//copy passInput's value on copyIcon click
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(password.value);
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //replace icon
    // navigator.clipboard.writeText(hash.value);
    // copyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //replace icon
  });

}
function reset(){
    document.getElementById('password').value ='';
    document.getElementById('hash').value = '';
    document.getElementById('decrypt').value = '';
}

    // if(newPassword){
    //     var hashed = CryptoJS.SHA256(newPassword)
    //     hash.value = hashed;

    //     // var decipher = CryptoJS.AES.decrypt(hashed)
    //     // decrypt.value = decipher

    // }else{
    //     alert('Password is Missing')
    // }

    //     setTimeout(() => {
    //     alert('password has been generated')
    // }, 200)
    


// const generatePassword = () => {
//     let newPassword = "";
  
//     //for loop will run till rangeInput value
//     for (let i = 0; i < rangeInput.value; i++) {
//       let randomNumbers = Math.floor(Math.random() * allCharacters.length);
//       newPassword += allCharacters[randomNumbers];
//     }
//     passwordInput.value = newPassword;
//     copyIcon.classList.replace("uil-file-check-alt", "uil-copy"); //replace icon
//   };
  

