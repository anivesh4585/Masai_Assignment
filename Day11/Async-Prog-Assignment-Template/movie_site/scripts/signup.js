document.querySelector("#signup").addEventListener("submit",mySignup);
var signup=JSON.parse(localStorage.getItem("details")) || [];
function mySignup(){
    event.preventDefault()
    var name=document.querySelector("#username");
     var email=document.querySelector("#email");
    var password=document.querySelector("#password");
    var number=document.querySelector("#number");

    var signupObj={
        name:name.value,
        email:email.value,
        password:password.value,
        number:number.value
    }
signup.push(signupObj)
localStorage.setItem("details",JSON.stringify(signup));
name.value="";
email.value="";
password.value="";
number.value="";
alert("Now go and Login to KIT")
}
