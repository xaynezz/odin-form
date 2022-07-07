function isEmpty() {
    let inputs = document.querySelectorAll("input");
    let pass = true;
    inputs.forEach((e) => {
        if (e.value == "" || !e.checkValidity()) {
            pass = false;
        }
    });

    if (!pass) {
        alert("Please enter and pass all fields before submitting");
        return false;
    }
    
    if (!email.checkValidity()) {
        alert("Please enter valid email");
        return false;
    }

    if (!phone.checkValidity()) {
        alert("Please enter SG mobile number starting with 9/8");
        return false;
    }
    
    if (pass1.value !== pass2.value) {
        alert("Passwords do not match. Try again!");
        return false;
    }
    
    alert("Form submitted")
    return true;
}

let submitBtn = document.querySelector(".submit");
let pass1 = document.querySelector("#password1");
let pass2 = document.querySelector("#password2");
let email = document.querySelector("#email");
let phone = document.querySelector("#phoneNumber");

submitBtn.addEventListener("click", isEmpty);
pass2.addEventListener("change", () => {
    if (pass2.value !== pass1.value)
        pass2.classList.add("fail");
    else
        pass2.classList.remove("fail");
})