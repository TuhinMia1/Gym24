const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById('navlinks');


navToggle.addEventListener('click',()=>{

    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-Links a').forEach(link=>{

    link.addEventListener("click",()=>{
        navToggle.classList.remove('active')
        navLinks.classList.remove('active')
    })
});
//navigation smothing
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click",()=>{
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'

        })
    })
})

//add background when scroll
window.addEventListener('scroll',function() {
const header = document.querySelector('header');
if(this.window.scrollY>50){
    header.style.backgroundColor="#000000"
    header.style.transition = "background-color 0.3s ease"
} else{
    header.style.backgroundColor="transparent"
}
});










navLinks.addEventListener('click',(event)=>{
    if(event.target.tagName){

    }
})