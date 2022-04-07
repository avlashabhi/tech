 let firstname = document.getElementById('fname');
 lastname = document.getElementById('lname');
 email = document.getElementById('mail');
 small = document.querySelector('.error');
 small1 = document.querySelector('.error');
 male = document.getElementById('m');
 female = document.getElementById('f');
 date = document.getElementById('date');
 form = document.getElementById('formid');
 password = document.getElementById('pass');
 address = document.getElementById('address');
 success = document.querySelector('.fa-circle-check');
 failure = document.querySelector('.fa-circle-exclamation');
 fname = document.querySelector('.firstname');
 lname = document.querySelector('.lastname');
 eemail = document.querySelector('.email');
 passs = document.querySelector('.passs');
 input = document.getElementById('fname');
 telephone = document.getElementById('tele');
 teleee = document.querySelector('.teleee');
 fasolid = document.querySelector('.fa-solid');
 country = document.getElementById('country');
 lab = document.querySelector('.lab');
 var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
 var phoneno = /^\d{10}$/;
 let nodigit = /^[a-zA-Z]*$/;
 var allowedExtensionsRegx = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
 let previous = lname.previousElementSibling;
 let previousemail = eemail.previousElementSibling;
 let passs1previous = passs.previousElementSibling;
 let teleee1previous = teleee.previousElementSibling;
 let country1previous = country.previousElementSibling;
 form.addEventListener("submit", (e) => {
     e.preventDefault();
     validateForm();

 });

 function validateForm() {

     if (firstname.value.trim() == '' || firstname.value.length < 3 || firstname.value.length > 25 || !firstname.value.match(nodigit)) {
         small.innerHTML = "Invalid first name, should contain min 3 and max 25 letters";
         fname.classList.add('border');
         failure.classList.add('failurered');
         success.classList.remove('successgreen');
         fname.classList.remove('border1');
     } else {
         small.innerHTML = " ";
         fname.classList.add('border1');
         fname.classList.remove('border');
         failure.classList.remove('failurered');
         success.classList.add('successgreen');
     }
     if (lastname.value.trim() == '' || lastname.value.length < 3 || lastname.value.length > 25 || !lastname.value.match(nodigit)) {
         lastname.nextElementSibling.innerHTML = "Invalid first name, should contain min 3 and max 25 letters";
         lname.previousElementSibling.classList.add('failurered');
         previous.previousElementSibling.classList.remove('successgreen');
         lname.classList.add('border');
         lname.classList.remove('border1');
     } else {
         lastname.nextElementSibling.innerHTML = " ";
         lname.classList.add('border1');
         lname.classList.remove('border');
         previous.previousElementSibling.classList.add('successgreen');
         lname.classList.remove('border');
         lname.previousElementSibling.classList.remove('failurered');

     }
     if (email.value == '' || !email.value.match(validRegex)) {
         email.nextElementSibling.innerHTML = "Invalid email, should contain examplae@gmail.com";
         eemail.previousElementSibling.classList.add('failurered');
         previousemail.previousElementSibling.classList.remove('successgreen');
         eemail.classList.add('border');
         eemail.classList.remove('border1');


     } else {
         email.nextElementSibling.innerHTML = " ";
         eemail.classList.add('border1');
         eemail.classList.remove('border');
         previousemail.previousElementSibling.classList.add('successgreen');
         eemail.classList.remove('border');
         eemail.previousElementSibling.classList.remove('failurered');

     }
     if (password.value == '' || !password.value.match(passw)) {
         password.nextElementSibling.innerHTML = "Invalid password, should contain @,digit,upper,lowecase";
         passs.previousElementSibling.classList.add('failurered');
         passs1previous.previousElementSibling.classList.remove('successgreen');
         passs.classList.add('border');
         passs.classList.remove('border1');


     } else {
         password.nextElementSibling.innerHTML = " ";
         passs.classList.add('border1');
         passs.classList.remove('border');
         passs1previous.previousElementSibling.classList.add('successgreen');
         passs.classList.remove('border');
         passs.previousElementSibling.classList.remove('failurered');

     }
     if (telephone.value == '' || !telephone.value.match(phoneno)) {
         telephone.nextElementSibling.innerHTML = "Invalid number, should contain 10 digits";
         teleee.previousElementSibling.classList.add('failurered');
         teleee1previous.previousElementSibling.classList.remove('successgreen');
         teleee.classList.add('border');
         teleee.classList.remove('border1');


     } else {
         telephone.nextElementSibling.innerHTML = " ";
         teleee.classList.add('border1');
         teleee.classList.remove('border');
         teleee1previous.previousElementSibling.classList.add('successgreen');
         teleee.classList.remove('border');
         teleee.previousElementSibling.classList.remove('failurered');
     }
     if (country.value === "Select Country") {
         country.nextElementSibling.innerHTML = "Choose a country";
         country.classList.add('border');
         country.classList.remove('border1');

     } else {
         country.nextElementSibling.innerHTML = "";
         country.classList.add('border1');
         country.classList.remove('border');
     }
     if (male.checked || female.checked) {
         lab.nextElementSibling.innerHTML = "";
     } else {
         lab.nextElementSibling.innerHTML = "Choose a gender";
     }

     if (date.value === "") {
         date.nextElementSibling.innerHTML = "Select a date";
         date.classList.add('border');
         date.classList.remove('border1');
     } else {
         date.nextElementSibling.innerHTML = "";
         date.classList.add('border1');
         date.classList.remove('border');
     }
     if (address.value === "" || address.value > 10 || address.value < 50) {
         address.nextElementSibling.innerHTML = "Please enter address between 10-25 characters";
         address.classList.add('border');
         address.classList.remove('border1');
     } else {
         address.nextElementSibling.innerHTML = "";
         address.classList.add('border1');
         address.classList.remove('border');
     }
 }