let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset - 1 && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

function copyToClipboard(text, id) {
  // Copiar al portapapeles
  navigator.clipboard.writeText(text).then(() => {
    // Mostrar mensaje "Copiado"
    const msg = document.getElementById(id);
    msg.style.opacity = 1;

    setTimeout(() => {
      msg.style.opacity = 0;
    }, 1000);
  });
}
