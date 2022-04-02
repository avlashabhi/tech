 let firstname = document.getElementById('fname');
 lastname = document.getElementById('lname');
 email = document.getElementById('mail');
 small = document.getElementsByClassName('error');
 form = document.getElementById('formid');
 success = document.getElementsByClassName('success');
 failure = document.getElementsByClassName('failure');
 input=document.getElementsByTagName('input');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm(){
   
    if (firstname.value =='') {
        input[0].style.border="none";
        small[0].innerHTML = "Invalid name";
        failure[0].style.visibility = "visible";
        input[0].style.border="2px solid red";
        success[0].style.visibility = "hidden";
        

    } else {
        input[0].style.border="none";
        input[0].style.border="none";
        small[0].innerHTML = "";
        failure[0].style.visibility = "hidden";
        success[0].style.visibility = "visible";
        input[0].style.border="2px solid green";
        
    }
    if (lastname.value ==''&&lastname.text.length<3&&lastname.text.length>25) {
        input[1].style.border="none";
        small[1].innerHTML = "Invalid name";
        failure[1].style.visibility = "visible";
        input[1].style.border="2px solid red";
        success[1].style.visibility = "hidden";
        

    } else {
        input[1].style.border="none";
        input[1].style.border="none";
        small[1].innerHTML = "";
        failure[1].style.visibility = "hidden";
        success[1].style.visibility = "visible";
        input[1].style.border="2px solid green";
        
    }
    if (email.value =='') {
        input[2].style.border="none";
        small[2].innerHTML = "Invalid name";
        failure[2].style.visibility = "visible";
        input[2].style.border="2px solid red";
        success[2].style.visibility = "hidden";
        

    } else {
        input[2].style.border="none";
        input[2].style.border="none";
        small[2].innerHTML = "";
        failure[2].style.visibility = "hidden";
        success[2].style.visibility = "visible";
        input[2].style.border="2px solid green";
        
    }

}