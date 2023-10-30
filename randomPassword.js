const PasswordEl = document.getElementById("Password");
const copyEl = document.getElementById("copy");
const btnEl = document.getElementById("pswrd-generate");

const UPPERCASE = "QWERTYUIOPASDFGHJKLZXCVBBNM";
const lowercase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "0123456789";
const symbols = "~`! @#$%^&*()_-+={[}]|:;'<,>.?/";
const all = UPPERCASE + lowercase + numbers + symbols;
const length = 12;

let randomPassword = function () {
  let password = "";
  password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  PasswordEl.value = password;
};
btnEl.addEventListener("click", randomPassword);

const copyPassword = function () {
  PasswordEl.select();
  document.execCommand("copy");
  console.log(copyPassword);
  alert("Your Password is copied to the clipboard!");
  PasswordEl.value = "";
};

copyEl.addEventListener("click", copyPassword);
