// for login-form

let send_btn=document.getElementsByClassName('send-btn')
for(let i=0;i<send_btn.length;i++){
 send_btn[i].onclick= function () {
   alert("Your Request has submiited Successfully. we will contact you shortly.")
}
 
}







function register() {
    let reg = document.getElementsByClassName('register')
    let reg_toggle =document.getElementById('reg-toggle')
    let btn=document.getElementById('send-btn')


        for (let i = 0; i < reg.length; i++) {
            reg[i].style.display = 'block'

        }
        
        btn.innerHTML='Register <i class="fa-solid fa-arrow-right ml-2 "></i>'
        reg_toggle.innerHTML='Allready an Account? <button onclick="login()" id="reg-btn" class=" text-sky-500 font-medium">Log in Here</button>'

        
} 


function login(){
let reg = document.getElementsByClassName('register')
let reg_toggle =document.getElementById('reg-toggle')
let btn=document.getElementById('send-btn')


        for (let i = 0; i < reg.length; i++) {
            reg[i].style.display = 'none'

        }
        
        btn.innerHTML='Log in <i class="fa-solid fa-arrow-right ml-2 "></i>'
        document.getElementById('reg-toggle').innerHTML= 'Dont have an Account? <button onclick="register()" id="reg-btn" class=" text-sky-500 font-medium">Register</button>'
}


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

