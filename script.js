// for login-form






function register() {
    let reg = document.getElementsByClassName('register')
    let reg_toggle =document.getElementById('reg-toogle')


        for (let i = 0; i < reg.length; i++) {
            reg[i].style.display = 'block'

        }
        

        reg_toggle.innerHTML='Allready an Account? <button onclick="login()" id="reg-btn" class=" text-sky-500 font-medium">Log in Here</button>'
}


// function login(){
// let reg = document.getElementsByClassName('register')


//         for (let i = 0; i < reg.length; i++) {
//             reg[i].style.display = 'none'

//         }
        

//         document.getElementById('reg-toogle').innerHTML= 'Dont have an Account? <button onclick="register()" id="reg-btn" class=" text-sky-500 font-medium">Register</button>'
// }


