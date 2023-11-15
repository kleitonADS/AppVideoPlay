const changeThemeBtn = document.querySelector("#change-animation")

const progressArea = document.querySelector(".progress-area")
const controlsArea = document.querySelector(".controls")

changeThemeBtn.addEventListener("change", function () {
  const controls = document.querySelector("#visualiser")
  controls.classList.toggle("off")
  progressArea.classList.toggle("animation-off")
  controlsArea.classList.toggle("c-animation-off")
})
