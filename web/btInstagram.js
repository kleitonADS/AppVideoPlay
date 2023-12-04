const changeLabelBtn = document.querySelector(".button-instagram")

changeLabelBtn.addEventListener("click", function () {
  const Icon = document.querySelector(".button-instagram")
  Icon.classList.toggle("active")

  const instagramLabel = document.querySelector(".instagram-top")
  const tiktokLabel = document.querySelector(".tiktok-top")
  const shortsLabel = document.querySelector(".shorts-top")

  const tiktok = document.querySelector(".button-tiktok")
  const shorts = document.querySelector(".button-youtube")

  tiktok.classList.remove("active")
  shorts.classList.remove("active")
  instagramLabel.classList.toggle("active")
  tiktokLabel.classList.remove("active")
  shortsLabel.classList.remove("active")
})
