const menu = document.getElementById("main-nav")
const hb = document.getElementById("hb")

hb.addEventListener("click", () => {
  if (menu.style.display == "flex") menu.style.display = "none"
  else menu.style.display = "flex"
})
