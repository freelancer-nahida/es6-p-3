document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('pass');

    const password = passwordField.value;
    if (email === 'nahida@gmail.com' && password === 'torbap') {
        window.location.href = 'bank.html'
    }
    else {

        alert('no massing');
    }
})