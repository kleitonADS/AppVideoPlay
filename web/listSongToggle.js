export function toogleListSong() {
  const contentList = document.querySelector(".main-content-list")
  contentList.classList.toggle("list-songs-active")


  const mainAudio = document.querySelector("#main-audio")
  // Check video after upload
  const videoPlayng = mainAudio.src.replace("http://localhost:5173/video/", "")

  const videoPlayngClear = videoPlayng.replace(".mp4", "")

  const videos = document.querySelectorAll(".video-names")
  videos.forEach(function (element) {
    const getVideoName = element.innerText

    if (getVideoName === videoPlayngClear) {
      element.classList.add("playng")
      element.parentElement.parentElement.style.border = "1px solid #fff"
      element.parentElement.parentElement.classList.add('song-active')
    } else {
      element.classList.remove("playng")
      element.parentElement.parentElement.style.border = ""
      element.parentElement.parentElement.classList.remove("song-active")
    }
  })
}
