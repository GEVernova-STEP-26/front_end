function initializeLoginPage() {

    const tabButtons = document.querySelectorAll('.tab-button');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tab = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            if (tab === 'signin') {
                signInForm.classList.remove('hidden');
                signUpForm.classList.add('hidden');
            } else {
                signInForm.classList.add('hidden');
                signUpForm.classList.remove('hidden');
            }
        });
    });

    // Sign in
    signInForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;

        alert('Successful!\nLogin: ' + email);
        window.location.href = "website.html";
    });

    // Sign up
    signUpForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupPasswordConfirm').value;
        const terms = document.getElementById('termsAccept').checked;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (!terms) {
            alert('Please accept the terms.');
            return;
        }

        alert('Signup Successful!');
        window.location.href = "website.html";
    });

    // Forgot password
    const forgotBtn = document.querySelector('.forgot-password');
    if (forgotBtn) {
        forgotBtn.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Password reset link will be sent to your email.');
        });
    }
}
