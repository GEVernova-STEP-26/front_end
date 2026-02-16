document.addEventListener("DOMContentLoaded", function () {

    Promise.all([
        fetch("signin.html").then(res => res.text()),
        fetch("signup.html").then(res => res.text())
    ])
    .then(([signinHTML, signupHTML]) => {

        document.getElementById("signin-container").innerHTML = signinHTML;
        document.getElementById("signup-container").innerHTML = signupHTML;

        // NOW initialize login logic
        initializeLoginPage();

    })
    .catch(err => console.error("Component loading error:", err));

});
