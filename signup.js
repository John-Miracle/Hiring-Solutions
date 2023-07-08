//Selectors
const password1Input = document.getElementById('password1');
const password2Input = document.getElementById('password2');
const usernameInput = document.getElementById('username');
const signupButton = document.querySelector('.signup-button');

//Event Listening
signupButton.addEventListener('click', saveLocalToDos);

//Function

function saveLocalToDos(event) {
  console.log('hello');
  let t = usernameInput.value;
  let p1 = passwordInput.value;
  let p2 = passwordInput.value;
  if (localStorage.getItem(key) !== null) {
    alert("Username already taken\nEnter Username again");
    event.preventDefault();
    return false;
  } 
  else if(p1!==p2)
  {
    confirm("Passwords don't Match");
    event.preventDefault();
    return false;
  }
  else {
    console.log("entered");
    confirm("Username has been successfully registered");
    localStorage.setItem(t,JSON.stringify(p1));
  }

}
