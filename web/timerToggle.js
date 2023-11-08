const changeThemeBtn = document.querySelector("#change-time")

changeThemeBtn.addEventListener("change", function () {
  const controls = document.querySelector(".progress-area")
  controls.classList.toggle("off")
})
