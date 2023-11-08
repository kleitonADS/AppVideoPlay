const changeThemeBtn = document.querySelector("#change-control")

changeThemeBtn.addEventListener("change", function () {

  const controls = document.querySelector(".controls")
  controls.classList.toggle("off")
})
