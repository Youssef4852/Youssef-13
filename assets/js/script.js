// When Scrolled More 80px Will Add The .scrolled Class For .header

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");

  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Menu Icon

let menu = document.querySelector(".header nav > li")
let list = document.querySelector(".header .list")

menu.addEventListener("click", (event)=>{
  list.classList.toggle("showed")
  event.stopPropagation()
})

document.addEventListener("click", ()=>{
  list.classList.remove("showed")
})

list.addEventListener("click", (event)=>{
  event.stopPropagation()
})

this.onclick = console.log(this)

// Search Bar

let search = document.querySelector(".header .bar .search input");

function scrollToText() {
  const text = search.value.trim().toLowerCase()

  if (text) {    
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span")

    for (let el of elements) {
      const content = el.textContent.toLowerCase()

      if (content.includes(text)) {
        el.scrollIntoView({behavior:"smooth", block:"center"})
        break
      }
    }
  }
}

search.addEventListener("keydown",  (event) =>{
  if (event.key === 'Enter') {
    scrollToText()
  }
})

search.addEventListener("blur", () =>{
  scrollToText()
})

// Scroll Top Button

let buttonTop = document.querySelector(".scrollTop .scrollTopButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    buttonTop.classList.add("scrolled");
  } else {
    buttonTop.classList.remove("scrolled");
  }
});

buttonTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// .iconHome Icon When Click

let iconHome = document.querySelector(".iconHome i");

iconHome.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView();
});

// When Click The List Item Portfolio

let links = document.querySelectorAll(".portfolio .links li");
let boxes = document.querySelectorAll(".portfolio .box");

links.forEach((link) => {
  link.onclick = () => {
    links.forEach((l) => l.classList.remove("actives"));
    link.classList.add("actives");

    let filter = link.classList.contains("all")
      ? "all"
      : link.classList.contains("active")
      ? "active"
      : "inactive";

    boxes.forEach((box) => {
      if (filter === "all") {
        box.style.display = "block";
      } else if (box.classList.contains(filter)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  };
});
