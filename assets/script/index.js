const titles = document.querySelector(".titles")
const navLinks = document.querySelectorAll("header > div > div > div >ul >li")
const nav = document.querySelector(".nav")
const paragraphe = document.querySelector(".paragraphe")
const img2 = document.querySelector(".img2")


window.addEventListener("scroll", ()=>{
    if (scrollY > 50 ) {
        titles.style.top = "50%";
        titles.style.opacity = "1";
        nav.style.bottom = 0;

    }else{
        titles.style.top = "100%";
        titles.style.opacity = "0";
        nav.style.bottom = "90%"
    }
})

navLinks.forEach((navLink)=>{
    navLink.addEventListener("click", ()=>{
        document.querySelector('.active').classList.remove('active');
        navLink.classList.add("active")
    })
})

img1.addEventListener("mouseover", ()=>{
    paragraphe.classList.add("para_section")
})