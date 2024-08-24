let signUpbtn=document.querySelector('.signupbtn')
let signInbtn=document.querySelector('.signinbtn')
let nameField=document.querySelector('.namefield')
let Title=document.querySelector('.title')
let underLine=document.querySelector('.underline')

 signInbtn.addEventListener("click",()=>{
    nameField. style.maxHeight='0';
    Title.innerHTML='Sign In';
    signInbtn.classList.remove('btnColor');
    signUpbtn.classList.add('btnColor');


    // signInbtn.classList.remove('disable')
    // signUpbtn.classList.add('disable')
    underLine.style.transform='translateX(35px)';
})

 signUpbtn.addEventListener("click",()=>{
    nameField. style.maxHeight='60px';
    Title.innerHTML='Sign Up'
    signUpbtn.classList.remove('btnColor'); 
    signInbtn.classList.add('btnColor')
    // signInbtn.classList.remove('disable')
    // signUpbtn.classList.add('disable')
    underLine.style.transform='translateX(0)';
})