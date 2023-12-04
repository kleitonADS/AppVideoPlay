const changeLabelBtn = document.querySelector(".button-youtube")

changeLabelBtn.addEventListener("click", function () {
  const Icon = document.querySelector(".button-youtube")
  const ShortsLabel = document.querySelector(".shorts-top")
  const instagram = document.querySelector(".button-instagram")
  const tiktok = document.querySelector(".button-tiktok")

  const instagramLabel = document.querySelector(".instagram-top")
  const tiktokLabel = document.querySelector(".tiktok-top")

  Icon.classList.toggle("active")
  instagram.classList.remove("active")
  tiktok.classList.remove("active")
  ShortsLabel.classList.toggle("active")
  tiktokLabel.classList.remove("active")
  instagramLabel.classList.remove("active")
})
