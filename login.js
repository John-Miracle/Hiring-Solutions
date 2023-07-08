//Selectors
const showPasswordCheckbox = document.getElementById('showPassword');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const loginButton = document.querySelector('.login-button');

//Event Listening
showPasswordCheckbox.addEventListener('change', ShowAndHide);
loginButton.addEventListener('click', saveLocalToDos);

//Function
function ShowAndHide() {
  passwordInput.type = this.checked ? 'text' : 'password';
}

function saveLocalToDos(event) {
   console.log("hello");
  let t = usernameInput.value;
  let p = passwordInput.value;
  //Searching for item with the key value todos in localStorage
  if (localStorage.getItem(t) === null) {
     alert("User Not Found");
  } 
  else {
    to = JSON.parse(localStorage.getItem(t));
    if (to === passwordInput.value) {
      confirm('User Name Found \nClick on Search to continue');
    }
    else
    {
      confirm("Invalid Password \nEnter the correct password");
    }
  }
}
