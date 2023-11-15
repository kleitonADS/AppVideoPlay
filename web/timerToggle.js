const changeThemeBtn = document.querySelector("#change-time")

const controlsArea = document.querySelector(".controls")

changeThemeBtn.addEventListener("change", function () {
  const controls = document.querySelector(".progress-area")
  controls.classList.toggle("off")
  controlsArea.classList.toggle("time-off")
})
