const changeRotationBt = document.querySelector("#change-rotation")

changeRotationBt.addEventListener("change", function () {
  const musicImg = document.querySelector(".img-cover")
  musicImg.classList.toggle("rotate")
})

