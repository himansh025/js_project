const passwordbox = document.getElementById("passwordtype");
const length = 16; // Corrected variable name
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbol = "@#$%&";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const allchars = uppercase + lowercase + number + symbol;

function createpassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (length > password.length) { // Corrected variable name
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordbox.value = password;
}
