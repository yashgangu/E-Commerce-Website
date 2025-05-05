const signinRadio=document.getElementById('signin');
const signupRadio=document.getElementById('signup');
const signinForm=document.querySelector('.form-signin-form');
const signupForm=document.querySelector('.form-signup-form');

function toggle(){
    if(signinRadio.checked){
        signinForm.style.display='flex';
        signupForm.style.display='none';
    }
    else{
        signinForm.style.display='none';
        signupForm.style.display='flex';
    }
}

signinRadio.addEventListener('change',toggle);
signupRadio.addEventListener('change',toggle);


// Initialize the display based on the default checked radio button
const signinLink=document.querySelector('.signin-link');
const signupLink=document.querySelector('.signup-link');
signinLink.addEventListener('click',function(){
    signinRadio.checked=true;
    toggle();
});
signupLink.addEventListener('click',function(){

    signupRadio.checked=true;
    toggle();
});


toggle();