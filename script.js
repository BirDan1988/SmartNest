

let send_btn=document.querySelectorAll('.send-btn')
for(let i=0;i<send_btn.length;i++){
 send_btn[i].onclick= function ( ) {
   alert("Your Request has submiited Successfully. we will contact you shortly.")
}
 
}








// function register() {
//     let reg = document.getElementsByClassName('register')
//     let reg_toggle =document.getElementById('reg-toggle')
//     let btn=document.getElementById('log_reg')


//         for (let i = 0; i < reg.length; i++) {
//             reg[i].style.display = 'block'

//         }
        
//         btn.innerHTML='Register <i class="fa-solid fa-arrow-right ml-2 "></i>'
//         reg_toggle.innerHTML='Allready an Account? <button onclick="login()" id="reg-btn" class=" text-sky-500 font-medium">Log in Here</button>'

        
// } 


// for login-form

// function login(){
// let reg = document.getElementsByClassName('register')
// let reg_toggle =document.getElementById('reg-toggle')
// let btn=document.getElementById('log_reg')


//         for (let i = 0; i < reg.length; i++) {
//             reg[i].style.display = 'none'

//         }
        
//         btn.innerHTML='Log in <i class="fa-solid fa-arrow-right ml-2 "></i>'
//         document.getElementById('reg-toggle').innerHTML= 'Dont have an Account? <button onclick="register()" id="reg-btn" class=" text-sky-500 font-medium">Register</button>'
// }


function fgtpassword(){


}


function openPopup(){

    document.getElementById("forgotPopup").classList.remove("hidden");
    document.getElementById("forgotPopup").classList.add("flex");

}

function closePopup(){

    document.getElementById("forgotPopup").classList.remove("flex");
    document.getElementById("forgotPopup").classList.add("hidden");

}

function sendLink(){

    alert("Password reset link sent successfully.");

    closePopup();

}


// menu-dropdown toggle

  let i =document.getElementById('toggle')
        function toggle(){
          if(i.style.height==='320px'){
              i.style.height='0'
          }
          else {
            i.style.height='320px'
          }

        }



        // form-validation

        // function send_btn(){

        //    let fullname=document.getElementById('fullname')
        //    let email=document.getElementById('email')
        //    let phone=document.getElementById('mobile')
        //    let password=document.getElementById('passwod')
        //    let confirm_password=document.getElementById('confirm-password')

        //    if (!fullname){
        //     alert("Enter Your Fullname")
        //    }

        // }


        // price-filter

        let filter=document.getElementsByClassName('filter-pill')[0]
     let pr1= document.getElementById('price-1')
     let pr2= document.getElementById('price-2')
     let pr3= document.getElementById('price-3')

     function ball(){

        if(filter.style.justifyContent==='end'){
            filter.style.justifyContent='start'
            pr1.innerHTML='$4.99 <span class="text-gray-500 text-xs font-medium">/month</span>'
            pr2.innerHTML='$9.99 <span class="text-gray-500 text-xs font-medium">/month</span>'
            pr3.innerHTML='$14.99 <span class="text-gray-500 text-xs font-medium">/month</span>'

        }

        else {
            filter.style.justifyContent='end'
              pr1.innerHTML='$49.99 <span class="text-gray-500 text-xs font-medium">/year</span>'
              pr2.innerHTML='$99.99 <span class="text-gray-500 text-xs font-medium">/year</span>'
              pr3.innerHTML='$149.99 <span class="text-gray-500 text-xs font-medium">/year</span>'
        }
        
     }


    // faq-part

    let qanda = document.getElementsByClassName('q-1');

for (let i = 0; i < qanda.length; i++) {

    qanda[i].onclick = function () {

        let arrow = this.getElementsByClassName('arrow')[0];
        let answer = this.getElementsByClassName('qanda-dropdown')[0];

        if (answer.style.display === 'block') {

            answer.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';

        } else {

            answer.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';

        }

    }

}



// login form

$(document).on('click','#regbtn',function(){

    $('.register').show()
        $('#reg_toggle').html('Allready an Account? <button onclick="login()" id="lgbtn" class=" text-sky-500 font-medium">Log in Here</button>')
     $('#log_reg').text('Register')
    
})


$(document).on('click','#lgbtn',function(){

    $('.register').hide()
    $('#reg_toggle').html('Dont have an Account? <button onclick="register()" id="regbtn" class=" text-sky-500 font-medium">Register</button>')
    $('#log_reg').text('Log In')
})

// function register(){
//     alert("Check your Email and confirm")
// }

function formsubmit(){

let fullname=document.getElementById('fullname').value
let email=document.getElementById('email').value
let mobile= document.getElementById('mobile').value
let password =document.getElementById('password').value
let cnf_password=document.getElementById('confirm-password').value


if(fullname=="" || email== "" || mobile=="" || password=="" || cnf_password==""){
alert('all field are mendotary')
return
}

if(mobile == NaN){
    alert('Its not a number')
    return
}

if(mobile.length!=10){
        alert('Please Enter 10 digit number')
        return
    }

    if(password!==cnf_password){
        alert('Password not match')
        return
    }

 else {
    alert('Your have successfully register/login')
    return
 }   
}