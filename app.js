let mouseCursor1 = document.querySelector(".cursor-1");
let mouseCursor2 = document.querySelector(".cursor-2");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor1.style.cssText = mouseCursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
}

navLink.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});
