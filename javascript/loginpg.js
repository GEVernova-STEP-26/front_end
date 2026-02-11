document.addEventListener("DOMContentLoaded", function() {

    const tabButtons = document.querySelectorAll('.tab-button');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
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

    // Sign in submit
    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        alert('Successful!\nLogin: ' + email);
    });

    // Sign up submit
    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const login = document.getElementById('signupLogin').value;
        const email = document.getElementById('signupEmail').value;
        const phone = document.getElementById('signupPhone').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupPasswordConfirm').value;
        const terms = document.getElementById('termsAccept').checked;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (!terms) {
            alert('Please accept the terms of the agreement.');
            return;
        }

        alert('Successful!\nLogin: ' + login + '\nEmail: ' + email);
    });

    // Forgot password
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Password reset link will be sent to your email');
    });

});