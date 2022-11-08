var fullName = document.getElementById('fullname');
var userName = document.getElementById('username');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');


var submitbtn = document.getElementById('submitbtn');
submitbtn.onclick= async ()=>{
    var done = false;
    let body={
        name:fullName.value,
        username:userName.value,
        email:email.value,
        phoneNumber:phone.value,
        password:pass1.value
    }
    if(pass1.value != pass2.value){
        pass1.style.border = "2px solid red";
        pass2.style.border = "2px solid red";
    }else{
        done = true;
        pass1.style.border = "2px solid green";
        pass2.style.border = "2px solid green";
        let data=await fetch(("/signup-emp"),{
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body)
            
        });
        console.log()

    }
    
}
