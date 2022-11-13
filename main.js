var model = document.querySelector('.model');
model.style.display="none";
var loginForm = document.querySelector("#login-form");
loginForm.addEventListener('submit' , function(e){
  e.preventDefault();
})
function validateLogin()
{
  var unameField = document.querySelector('#uname');
  var pwdField = document.querySelector('#pwd');
  if(unameField.value=="Admin"&&pwdField.value=="123456")
  {
    alert("You are now logged in!");
    window.location.href = "account.html";
  }
  else if (unameField.value!="Admin" || pwdField.value!="123456")
  {
      model.style.display="block";
  }
}
function dismissModal()
{
  model.style.display="none";
}
