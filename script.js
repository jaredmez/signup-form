
const form = document.querySelector("form");
const submitBtn = document.querySelector("button");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const formEl = document.querySelectorAll("form>input");
    formEl.forEach(input => {
        if (input.value.length === 0) {
            showError(input.id);
        }
        else if (input.value.length > 0) {
            if (input.id === 'password') {
                passwordCheck();
            }
            else if (input.id === 'email') {
                emailCheck();
            }
        }
    })
}

function showError(input) {
    const errorEl = document.querySelector(`.${input}-error`);
    errorEl.innerText = `Field cannot be empty`;
}

function passwordCheck() {
    console.log('welp');
    const password = document.querySelector("#password");
    const passwordErr = document.querySelector(".password-error");
    if (password.value.length < 6) {
        console.log('hey')
        passwordErr.innerText = 'Password must be 6 characters min'
    }
    else if (password.value.length >10) {
        passwordErr.innerHTML = 'Password must be 10 charcters max';
    }

}

function emailCheck() {
    
}