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
