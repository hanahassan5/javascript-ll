// go to signup page

function showSignup() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("signup").classList.remove("hidden");
}

// check form data

function validateValue() {

    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    result.classList.remove("hidden");

    if (user == "" && email == "" && pass == "" && confirm == "") {
        result.innerHTML = "Enter Data";
        return false;
    } else if (email.indexOf("@", 1) == -1 || email.indexOf(".com", 3) == -1) {
        result.innerHTML = "Enter Valid Email";
        return false;
    } else if (pass.length < 8) {
        result.innerHTML = "Weak Password";
        return false;
    } else if (pass != confirm) {
        result.innerHTML = "Passwords don't match";
        return false;
    } else {
        document.getElementById("userEmail").innerHTML = email;
        document.getElementById("signup").classList.add("hidden");
        document.getElementById("success").classList.remove("hidden");
        return false;
    }
}