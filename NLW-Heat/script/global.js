// Painel lateral mobile
const navSlide = ()=>{
  const sideButtom = document.querySelector('.sideButton')
  const nav = document.querySelector('.nav-links')
  const navLinks =document.querySelectorAll('.nav-links li')
  
  sideButtom.addEventListener('click',()=>{
    // Toggle nav 
    nav.classList.toggle('nav-active');
      
    // Animate Links
      navLinks.forEach((link,index) => {
        if(link.style.animation) {
          link.style.animation = ';'
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`
        }
  })
      //Side button rotate
      sideButtom.classList.toggle('toggle')
  })
}

navSlide();






function changeHeaderColor() {
  let nav = document.querySelector("#headerPage");
  if (window.scrollY < 100) {
    nav.classList.remove("bgDark");
    nav.classList.add("bgTransparent");
  }else if(window.scrollY >= 100){
    nav.classList.remove("bgTransparent");
    nav.classList.add("bgDark");
  }
}

window.addEventListener('load', changeHeaderColor);
window.addEventListener("scroll", changeHeaderColor);
