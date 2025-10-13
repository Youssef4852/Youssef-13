// When Scrolled More 80px Will Add The .scrolled Class For .header

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");

  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Scroll Top Button

let buttonTop = document.querySelector(".scrollTop .scrollTopButton")

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    buttonTop.classList.add("scrolled")
  } else {
    buttonTop.classList.remove("scrolled")
  }
})

buttonTop.addEventListener("click", () => {
  window.scrollTo(0, 0)
})

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