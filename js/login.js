document.getElementById('submit-button').addEventListener('click', function(){
    // user email 
    const inputUserEmail = document.getElementById('user-email');
    const userEmail = inputUserEmail.value;
    // user password
    const inputUserPassword = document.getElementById('user-password');
    const userPassword = inputUserPassword.value
   
    // condition for going banking page
    if(userEmail == 'torisd56@gamil.com' && userPassword == 'secret'){
        window.location.href = 'banking.html'
    }
    else{
        const errorMsg = document.getElementById('error-msg');
        errorMsg.style.display='block'
    }
})