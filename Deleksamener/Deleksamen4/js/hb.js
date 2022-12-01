const menu = document.getElementById("main-nav")
const hb = document.getElementById("hb")

hb.addEventListener("click", () => {
  if (menu.style.display == "flex") {
    menu.style.display = "none"
    hb.setAttribute("aria-label", "Åpne navigasjonsmenyen")
  } else {
    menu.style.display = "flex"
    hb.setAttribute("aria-label", "Lukk navigasjonsmenyen")
  }
})
