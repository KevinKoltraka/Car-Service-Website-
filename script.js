// Handle Login Form Submission
document.querySelector('#login-container form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const loginUsername = document.getElementById('login-username').value.trim();
    const loginPassword = document.getElementById('login-password').value.trim();

    console.log('Login Username:', loginUsername);
    console.log('Login Password:', loginPassword);

    if (loginUsername && loginPassword) {
        // Send data to the server (using Fetch API)
        fetch('login_action.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'username': loginUsername,
                'password': loginPassword
            })
        })
        .then(response => response.text())
        .then(result => {
            console.log(result);
            // Handle server response (e.g., show a success message or redirect)
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors (e.g., show an error message)
        });
    } else {
        alert('Please fill in all required fields.');
    }
});

// Handle Signup Form Submission
document.querySelector('#signup-container form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const signupFullname = document.getElementById('signup-fullname').value.trim();
    const signupEmail = document.getElementById('signup-email').value.trim();
    const signupUsername = document.getElementById('signup-username').value.trim();
    const signupPassword = document.getElementById('signup-password').value.trim();

    console.log('Signup Full Name:', signupFullname);
    console.log('Signup Email:', signupEmail);
    console.log('Signup Username:', signupUsername);
    console.log('Signup Password:', signupPassword);

    if (signupFullname && signupEmail && signupUsername && signupPassword) {
        // Send data to the server (using Fetch API)
        fetch('signup_action.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'fullname': signupFullname,
                'email': signupEmail,
                'username': signupUsername,
                'password': signupPassword
            })
        })
        .then(response => response.text())
        .then(result => {
            console.log(result);
            // Handle server response (e.g., show a success message or redirect)
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors (e.g., show an error message)
        });
    } else {
        alert('Please fill in all required fields.');
    }
});

// Initialize the Google Sign-In API
function onSignIn(googleUser) {
    // Get user profile information
    var profile = googleUser.getBasicProfile();
    document.getElementById('name').textContent = profile.getName();
    document.getElementById('email').textContent = profile.getEmail();
    document.getElementById('image').src = profile.getImageUrl();
    document.querySelector('.data').style.display = 'block'; // Show user data section
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        document.querySelector('.data').style.display = 'none'; // Hide user data section
    });
}

