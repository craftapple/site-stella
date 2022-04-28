window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0);
})

const links = document.querySelectorAll(".scroll-to");
links.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const el = document.getElementById(item.getAttribute("href^="));
    el.scrollIntoView({behavior:"smooth"})
  })
})