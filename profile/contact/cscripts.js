//Validate radio button selection

function validate_radiobtn() {
  var radiobtn = document.querySelectorAll('input[name="ritem"]');
  var buttonvalue;
  for (var rb of radiobtn) {
    console.log(rb, radiobtn);
    if (rb.checked === true) {
      buttonvalue = rb.value;
      alert(buttonvalue + 'selected');
    } else {
      alert(buttonvalue + ' Please select your option');
    }
  }
}

//name validation

function validate_name() {
  var fname = document.forms['formbasic']['fname'].value;
  var lname = document.forms['formbasic']['lname'].value;
  // alert(x);
  if (fname == '' || lname == '') {
    alert('Please enter your name');
    return false;
  } else if (!isNaN(fname) || !isNaN(lname)) {
    alert('please enter a string');
    return false;
  } else alert('Name OK.');
}

//Validate age

function validate_age() {
  var x = document.forms['formbasic']['age'].value;
  if (x == '' || x < 10 || x > 100) {
    alert('Age is not valid');
    return false;
  } else {
    alert('Age is valid');
  }
}

//email verification

function validate_email() {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log(document.forms['formbasic']['email'].value);
  var input = document.forms['formbasic']['email'];
  console.log(input.value);
  if (input.value.match(mailformat)) {
    alert('email is valid');
    return true;
  } else if (input.value == '') {
    {
      alert('email field is empty.');
    }
  } else {
    x = input.value;
    console.log(x);
    var pos = x.indexOf('@');
    console.log(pos);
    if (pos === 0) {
      alert('position of @ is not correct. Start with a letter or a number');
    }
    alert('email is not valid');
    return false;
  }
}

//copy fields from pasword to confirm password field

function copyfields() {
  var src = document.getElementById('password');
  var dest = document.getElementById('cpassword');
  dest.value = src.value;
}

//Password toggle

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
  cpassword.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});
