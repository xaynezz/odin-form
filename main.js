function isEmpty() {
    let inputs = document.querySelectorAll("input");
    let pass = true;
    inputs.forEach((e) => {
        if (e.value == "" || !e.checkValidity()) {
            pass = false;
        }
    });
    
    if (!pass) {
        alert("Please enter and pass all fields before submitting")
        return false;
    }
    
    if (pass1.value !== pass2.value) {
        alert("Passwords do not match. Try again!")
        return false;
    }

    alert("Form submitted")
    return true;
}

let submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", isEmpty);

let pass1 = document.querySelector("#password1");
let pass2 = document.querySelector("#password2");