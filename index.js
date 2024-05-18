let circle = document.querySelectorAll(".circle");

circle.forEach((elcircle) => {
    elcircle.addEventListener("click", (e) => {
        circle.forEach((elcircle) => {
            elcircle.classList.remove("activeCircle");
        })
        e.currentTarget.classList.add("activeCircle");
    })
})
let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")
let message = document.getElementById("message");
let checkRules = document.getElementById("checkRules")
let btnSubmit = document.querySelector(".btn_submit")
let inputs = document.querySelectorAll("input")
let success = document.getElementById("success")
let IconCloseMenu = document.querySelector(".IconCloseMenu")
btnSubmit.addEventListener("click", (e) => {
    if (fname.value == "" || lname.value == "" || email.value == "" || message.value == "") {
        inputs.forEach((input) => {
            if (input.value == "") {
                input.classList.add("borderError")
                setInterval(() => {
                    input.classList.remove("borderError")
                } , 1000)
            }
        })
    }
    else if (!fname.value == "" && !lname.value == "" && !email.value == "" && !message.value == "" && checkRules.checked) {
        success.classList.remove("none")
    }
})
IconCloseMenu.addEventListener("click", () => {
    success.classList.add("none")
})