document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let error = document.getElementById("error");

  if(name.length < 3){
    error.innerText = "Name must be at least 3 characters";
    error.style.color = "red";
  } 
  else if(!email.includes("@")){
    error.innerText = "Enter valid email";
    error.style.color = "red";
  } 
  else {
    error.innerText = "Form submitted!";
    error.style.color = "green";
  }
});
