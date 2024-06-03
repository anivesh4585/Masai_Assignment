function startLogin(e){
    e.preventDefault();

     var form =document.getElementById("login");

    //  get the data
     var email =document.querySelector("#email").value;
      
     var password =document.querySelector("#password").value;

    //  check the data

     var admins=JSON.parse(localStorage.getItem("details"));

     for(let i=0;i<admins.length;i++){
        
        let u=admins[i].email;
       
        let p=admins[i].password;
     
        if(u===email && p===password){
             window.location.href="index.html"
            break;
        }else{
            alert("Invalid Credentials")
            break;
        }
    }
}