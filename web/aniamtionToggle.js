const changeThemeBtn = document.querySelector("#change-animation")

changeThemeBtn.addEventListener("change", function () {
  const controls = document.querySelector("#visualiser")
  controls.classList.toggle("off")
})
