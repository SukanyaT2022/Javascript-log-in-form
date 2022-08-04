function login() {
  let userName = document.getElementById('user').value;
  let password = document.getElementById('passcode').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  if (userName == 'Yoon' && password == '12345' && password == confirmPassword)
    alert('log in succesfully');
  else {
    alert('user name or password is not correct');
  }
}
//function for create checkbox to showpassword
//the main point we just change type from password to text

function showPassword() {
  let showp = document.getElementById('passcode');
  if (showp.type == 'password') {
    showp.type = 'text';
  } else {
    showp.type = 'password';
  }
}
function showConfirmPassword() {
  let showc = document.getElementById('confirmPassword');
  if (showc.type == 'password') {
    showc.type = 'text';
  } else {
    showc.type = 'password';
  }
}
// this function use for validate if user put 1Capital letter, number or small letter as condition

function validate() {
  let password = document.getElementById('passcode').value;
  let cp = document.getElementById('cp');
  let sm = document.getElementById('sm');
  let num = document.getElementById('num');
  let special = document.getElementById('sp');
  //condition for must have one capital letter
  if (password.match(/[A-Z]/)) {
    cp.style.display = 'none'; //display: none is disaaper
  } else {
    cp.style.display = 'block'; //display: block make it visible
  }
  //condition for must have at least one small letter

  if (password.match(/[a-z]/)) {
    sm.style.display = 'none';
  } else {
    sm.style.display = 'block';
  }
  //condition at least one number

  if (password.match(/[0-9]/)) {
    num.style.display = 'none';
  } else {
    num.style.display = 'block';
  }
  //below if passward have one special chractor
  if (password.match(/[!/@/$/%/&]/)) {
    special.style.display = 'none'; //display: none is disaaper--put variable which is special.style
  } else {
    special.style.display = 'block'; //display: block make it visible
  }
}
