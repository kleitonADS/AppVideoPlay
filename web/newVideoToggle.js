export function newVideo(){
  const newContentAdd = document.querySelector(".new-file-content")
  const listVideos = document.querySelector(".list-all-songs")
  newContentAdd.classList.toggle("active")
  listVideos.classList.toggle("list-none")
}
