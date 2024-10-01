// navbar toggler starts
const toggler = document.querySelector('.fa-bars')
const nav = document.querySelector('nav')

function manageToggle(){
    nav.classList.toggle("nav-bar");
    console.log(nav);
}
// navbar toggler ends

// like starts

const like = document.querySelector('.fa-heart')

like.addEventListener('click',()=>{
    like.style.color = "red";
})

// like ends

// send mail 

function sendMail(){
    let parms = {
        
    }
}