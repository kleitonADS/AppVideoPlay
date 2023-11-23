const changeLabelsControl = document.querySelector("#change-label")

changeLabelsControl.addEventListener("change", function () {
  const listIcon = document.querySelector(".label-controls")
  listIcon.classList.toggle("off")
})
