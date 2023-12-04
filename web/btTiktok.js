const changeLabelBtn = document.querySelector(".button-tiktok")

changeLabelBtn.addEventListener("click", function () {
   const Icon = document.querySelector(".button-tiktok")
   const shortsLabel = document.querySelector(".shorts-top")
   const instagramLabel = document.querySelector(".instagram-top")
   const tiktokLabel = document.querySelector(".tiktok-top")
  
   const instagram = document.querySelector(".button-instagram")
   const shorts = document.querySelector(".button-youtube")
   Icon.classList.toggle("active")
   instagram.classList.remove("active")
   shorts.classList.remove("active")
   tiktokLabel.classList.toggle("active")
   shortsLabel.classList.remove("active")
   instagramLabel.classList.remove("active")
})
