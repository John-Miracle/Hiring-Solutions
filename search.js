//Selectors
const usernameInput = document.getElementById('username');
const SearchButton = document.querySelector('.search-button');

//Event Listening
SearchButton.addEventListener('click', search);

//Function
function search(event) {
   console.log("hello");
  let t = usernameInput.value;
  //Searching for item with the key value todos in localStorage
  if (localStorage.getItem(t) === null) {
     alert("User Not Found");
  } 
  else {
    to = JSON.parse(localStorage.getItem(t));
    if (to === passwordInput.value) {
      confirm('User Name Found \nl');
    }
  }
}
