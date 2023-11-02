const inputFirstname = document.getElementById("Fname")
const inputLastname = document.getElementById("Lname")
const inputUsernameReg = document.getElementById("Uname")
const inputPasswordReg = document.getElementById("Pword")
const inputConfirmPassword = document.getElementById("CPword")
const SubmitBtn = document.getElementById('btn')
const signIn = document.getElementById('signIn')

let ref = signIn;
let iun;
let ipw;
let isUDdef = false;
const defName = "Kate"
const defPass = "12345"

const userDat = {
  firstName: "",
  lastName: "",
  username: "", 
  password: "", 
};

SubmitBtn.onclick = function() {
  f_next();
}

function f_next(){
  userDat.firstName = inputFirstname.value;
  userDat.lastName = inputLastname.value;
  userDat.username = inputUsernameReg.value;
  userDat.password = inputPasswordReg.value;
  if ((userDat.username.length < 1 || userDat.password.length < 1) && isUDdef != true) {
    alert ('Укажите имя пользователя и пароль!');
  } else {
  if (inputConfirmPassword.value != userDat.password){alert ('Пароли не совпадают!')}
  else{
      let divLog = document.createElement('div')
      divLog.className = "login-box";
      divLog.innerHTML = `<form>
      <div class="user-box">
        <input type="text" name="" required="" id="un">
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required="" id="pw">
        <label>Password</label>
      </div>
      <center>
        <a id="reference" href="https://www.meme-arsenal.com/memes/12bc05428e021ff6b5a9320c719a192d.jpg">
              SEND
          <span></span>
        </a>
      </center>
    </form>`
      document.body.append(divLog);
      const inputUsername = document.getElementById("un")
      const inputPassword = document.getElementById("pw")
      const reference = document.getElementById("reference")

      iun = inputUsername;
      ipw = inputPassword;
      reference.onclick = function() {
        if (isInputDataValid() == false) {
          alert("Данные введены неверно!");
          return false
        }
      }
    }
  }
}


function isInputDataValid(){
  if (isUDdef == false){
    if (iun.value == userDat.username && ipw.value == userDat.password) {
      return true
    }
    else {return false}
  } else {
    if (iun.value == defName && ipw.value == defPass) {
      return true
    }
    else {return false}
  }

}


signIn.onclick = function(){
  isUDdef = true;
  f_next();
}



